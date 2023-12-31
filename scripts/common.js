// メニューでのスクロールを無効化にする
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

// グラデーションがフィードインする
document.addEventListener("DOMContentLoaded", function () {
    const backgroundFadeInElement = document.querySelector('.fade-in');
    backgroundFadeInElement.classList.add('active');

});

// すべての画像がドラッグされないようにするïÏ
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
});
