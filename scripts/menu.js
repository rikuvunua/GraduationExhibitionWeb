document.getElementById('drawer-input').addEventListener('change', function () {
    if (this.checked) {
        disablePageScroll();
    } else {
        enablePageScroll();
    }
});

function disablePageScroll() {
    document.body.style.overflow = 'hidden';
}

function enablePageScroll() {
    document.body.style.overflow = 'auto';
}