var container = document.querySelector('.container');
var viewHeight = document.documentElement.clientHeight;
var pageNum = document.querySelectorAll('.section').length;

var currentPosition = 0;

container.style.height = viewHeight + 'px';

function goDown () {
  if (currentPosition > - viewHeight * (pageNum - 1)) {
    currentPosition = currentPosition - viewHeight;
    container.style.top = currentPosition + 'px';
  }
}

function goUp () {
  if (currentPosition < 0) {
    currentPosition = currentPosition + viewHeight;
    container.style.top = currentPosition + 'px';
  }
}

function throttle (fn, delay) {
  let baseTime = 0;
  return function () {
    const currentTime = Date.now();
    if (baseTime + delay < currentTime) {
      fn.apply(this, arguments);
      baseTime = currentTime;
    }
  }
}

var handlerWheel = throttle(scrollMove, 1000);
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property
if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
  document.addEventListener('mousewheel', handlerWheel);
} else {
  document.addEventListener('DOMMouseScroll', handlerWheel);
}
function scrollMove (e) {
  if (e.deltaY > 0) {
    goDown();
  } else {
    goUp();
  }
}

var touchStartY = 0;
document.addEventListener('touchstart', event => {
  touchStartY = event.touches[0].pageY;
})
var handleTouchEnd = throttle(touchEnd, 500);
document.addEventListener('touchend', handleTouchEnd);
function touchEnd (e) {
  var touchEndY = e.changedTouches[0].pageY;
  if (touchEndY - touchStartY < 0) {
    goDown();
  } else {
    goUp();
  }
}

// FadeIn
document.addEventListener("DOMContentLoaded", function() {
  const backgroundFadeInElement = document.querySelector('.fade-in');
  backgroundFadeInElement.classList.add('active');

  container.style.height = '1080px';
  container.style.top = '-1080px';
});

