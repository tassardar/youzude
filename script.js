const products = [...document.querySelectorAll('.product')];
const dialog = document.querySelector('#buyDialog');
const cart = document.querySelector('#cart');
const overlay = document.querySelector('#overlay');
const cartItems = document.querySelector('#cartItems');
const won = value => `₩${value.toLocaleString('ja-JP')}`;
let selected = null;
let basket = [];

document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active');
  button.classList.add('active');
  products.forEach(product => product.classList.toggle('hidden', button.dataset.filter !== 'all' && product.dataset.category !== button.dataset.filter));
}));

products.forEach(product => product.querySelector('.product-image').addEventListener('click', () => {
  selected = { name: product.dataset.name, price: Number(product.dataset.price), url: product.dataset.url };
  document.querySelector('#dialogProduct').textContent = selected.name;
  document.querySelector('#dialogPrice').textContent = won(selected.price);
  const query = encodeURIComponent(`YOUZUDE ${selected.name} vintage used`);
  document.querySelector('#amazonBuy').href = `https://www.amazon.co.jp/s?k=${query}`;
  document.querySelector('#mercariBuy').href = `https://jp.mercari.com/search?keyword=${query}`;
  dialog.showModal();
}));

document.querySelector('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelector('#directBuy').addEventListener('click', () => {
  basket.push(selected); dialog.close(); renderCart();
  const toast = document.querySelector('#toast');
  toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1600);
});

function renderCart() {
  document.querySelector('#cartCount').textContent = basket.length;
  document.querySelector('#cartTotal').textContent = won(basket.reduce((sum,item) => sum + item.price,0));
  cartItems.innerHTML = basket.length ? basket.map((item,index) => `<div class="cart-line"><div><h3>${item.name}</h3><strong>${won(item.price)}</strong></div><button data-remove="${index}">削除</button></div>`).join('') : '<p class="empty">カートは空です。</p>';
  cartItems.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => { basket.splice(Number(button.dataset.remove),1); renderCart(); }));
}

function toggleCart(open) { cart.classList.toggle('open',open); overlay.classList.toggle('open',open); cart.setAttribute('aria-hidden',String(!open)); }
document.querySelector('#cartButton').addEventListener('click', () => toggleCart(true));
document.querySelector('#cartClose').addEventListener('click', () => toggleCart(false));
overlay.addEventListener('click', () => toggleCart(false));
document.querySelector('#checkout').addEventListener('click', () => alert('デモサイトのため、決済画面には進みません。'));
