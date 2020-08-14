// close buttons for each product type.

const shoe_close = document.getElementById('shoe_close');
const watch_close = document.getElementById('watch_close');
const phone_close = document.getElementById('phone_close');
const cloth_close = document.getElementById('cloth_close');
const bag_close = document.getElementById('bag_close');

//buttons that display
const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');
const btn_3 = document.getElementById('btn_3');
const btn_4 = document.getElementById('btn_4');
const btn_5 = document.getElementById('btn_5');

btn_1.addEventListener('click', () => {
  shoe.style.display = 'block';
});

btn_2.addEventListener('click', () => {
  phones.style.display = 'block';
});

btn_3.addEventListener('click', () => {
  watches.style.display = 'block';
});

btn_4.addEventListener('click', () => {
  bags.style.display = 'block';
});

btn_5.addEventListener('click', () => {
  clothes.style.display = 'block';
});
// all products;
const shoe = document.getElementById('Shoes');
const watches = document.getElementById('watches');
const clothes = document.getElementById('clothes');
const phones = document.getElementById('phones');
const bags = document.getElementById('bags');

// add event listeners
shoe_close.addEventListener('click', () => {
  shoe.style.display = 'none';
});

phone_close.addEventListener('click', () => {
  phones.style.display = 'none';
});

cloth_close.addEventListener('click', () => {
  clothes.style.display = 'none';
})

watch_close.addEventListener('click', () => {
  watches.style.display = 'none';
})

bag_close.addEventListener('click', () => {
  bags.style.display = 'none';
})