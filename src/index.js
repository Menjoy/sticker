(function() {
  var elements = window.document.getElementsByClassName('sticker');
  
  
  window.document.onscroll = function(event) {
    if (elements && elements.length) {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
          elOffsetTop,
          prevEl,
          el;
      
      for (var index = 0; index < elements.length; index++) {
        el = elements[index];
        prevEl = index > 0 ? elements[index - 1] : null;

        if (!prevEl || !prevEl.classList.contains('sticked')) {
          elOffsetTop = el.offsetTop;
        } else {
          elOffsetTop = el.offsetTop - (prevEl.offsetTop + prevEl.clientHeight);
        }

        if (scrollTop > elOffsetTop && !el.classList.contains('sticked')) {
          el._oldOffsetTop = el.offsetTop;
          el.style._oldPosition = el.style.position;
          el.style._oldTop = el.style.top;
          el._oldStyle = el.style;
          el.style.position = 'fixed';
          if (prevEl) {
            el.style.top = prevEl.offsetTop + prevEl.clientHeight + 'px';
          } else {
            el.style.top = '0px';
          }
          el.classList.add('sticked');
        } else if (scrollTop < (el._oldOffsetTop - el.clientHeight) && el.classList.contains('sticked')) {
          el.style.position = el.style._oldPosition;
          el.style.top = el.style._oldTop;
          el.classList.remove('sticked');
        }
      }
    }
  };
})();