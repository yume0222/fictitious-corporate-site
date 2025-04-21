// スライドメニュー
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

// ボタンをクリックしたときにクラスを付与
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  // ボタンのテキストを変更
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});