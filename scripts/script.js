function isOrContains(parent, child) {
  var node = child;
  while (node) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

var menuElement = document.querySelector('.nav-content');

let isScrolling = false;

window.addEventListener('wheel', function (e) {
  if (isOrContains(menuElement, e.target)) {
    return;
  }

  e.preventDefault();

  if (!isScrolling) {
    isScrolling = true;

    if (e.deltaY < 0) {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }

    setTimeout(function () {
      isScrolling = false;
    }, 1000);
  }
}, { passive: false });

let touchStartY = 0;
let touchEndY = 0;

window.addEventListener('touchstart', function (e) {
  if (isOrContains(menuElement, e.target)) {
    return;
  }
  touchStartY = e.changedTouches[0].screenY;
}, false);

window.addEventListener('touchend', function (e) {
  if (isOrContains(menuElement, e.target)) {
    return;
  }
  touchEndY = e.changedTouches[0].screenY;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  if (touchEndY < touchStartY) {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
  if (touchEndY > touchStartY) {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: 'smooth'
    });
  }
}
