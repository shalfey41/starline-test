(function() {
  // Подстраивает размер картинки под размер контейнера
  var comfortSize = function(imageContainer) {
    var container = document.querySelectorAll(imageContainer);
    Array.prototype.forEach.call(container, function(item) {
      var boxHeight = item.offsetHeight,
          boxWidth = item.offsetWidth,
          boxImage = item.querySelector('img'),
          boxImageHeight = boxImage.offsetHeight,
          boxImageWidth = boxImage.offsetWidth;

      if (boxImageHeight > boxImageWidth) {
        boxImage.classList.add('full-width');
        boxImage.classList.remove('full-height');
      } else {
        boxImage.classList.add('full-height');
        boxImage.classList.remove('full-width');
      }

      var newBoxImageHeight = boxImage.offsetHeight,
          newBoxImageWidth = boxImage.offsetWidth,
          halfMarginHeight = (newBoxImageHeight - boxHeight) / 2,
          halfMarginWidth = (newBoxImageWidth - boxWidth) / 2;

      if (newBoxImageHeight < newBoxImageWidth) {
        boxImage.style.marginLeft = '-' + halfMarginWidth + 'px';
        boxImage.style.marginTop = 0;
      } else {
        boxImage.style.marginTop = '-' + halfMarginHeight + 'px';
        boxImage.style.marginLeft = 0;
      }
    });
  }

  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
     comfortSize('.user__avatar');
  };
})();