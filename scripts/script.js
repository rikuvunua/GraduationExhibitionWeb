let isScrolling = false;

window.addEventListener('wheel', function (e) {
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
  touchStartY = e.changedTouches[0].screenY;
}, false);

window.addEventListener('touchend', function (e) {
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

// FadeIn
document.addEventListener("DOMContentLoaded", function () {
  const backgroundFadeInElement = document.querySelector('.fade-in');
  backgroundFadeInElement.classList.add('active');

});