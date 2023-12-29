document.addEventListener('DOMContentLoaded', function() {
  // チェックボックスが変更されたときの処理
  document.querySelectorAll('input[name="checkbox filter_box_list_label"]').forEach(input => {
    input.addEventListener('change', function() {
      checkCheckboxStatus();
    });
  });

  // チェックボックスの状態を判定する関数
  function checkCheckboxStatus() {
    // 各チェックボックスの状態を取得
    document.querySelectorAll('input[name="checkbox filter_box_list_label"]').forEach(input => {
      console.log(`${input.value}: ${input.checked}`);
    });
  }
});

window.onload = function() {
    const chackbox = document.querySelector('.chackbox');
    const filterBoxes = chackbox.querySelectorAll('.checkbox.filter_box');

    let isOverflowing = false;

    filterBoxes.forEach(box => {
        console.log('Box width:', box.offsetWidth, 'Container width:', chackbox.offsetWidth);
        if (box.offsetWidth > chackbox.offsetWidth) {
            isOverflowing = true;
        }
    });

    console.log('Is overflowing:', isOverflowing);

    if (isOverflowing) {
        chackbox.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
};
