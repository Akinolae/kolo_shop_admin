const shoeStock = document.getElementById("shoe");
const watchStock = document.getElementById("wristwatch");
const bagStock = document.getElementById("bag");
const phoneStock = document.getElementById("phone");
const clothStock = document.getElementById("clothes");

fetch("http://localhost:4000/product/shoe")
  .then((response) => response.json())
  .then((data) => {
    shoeStock.innerText = data.length;
  });

fetch("http://localhost:4000/product/phones")
  .then((response) => response.json())
  .then((data) => {
    phoneStock.innerText = data.length;
  });

fetch("http://localhost:4000/product/watches")
  .then((response) => response.json())
  .then((data) => {
    watchStock.innerText = data.length;
  });

fetch("http://localhost:4000/product/clothes")
  .then((response) => response.json())
  .then((data) => {
    clothStock.innerText = data.length;
  });

fetch("http://localhost:4000/product/bag")
  .then((response) => response.json())
  .then((data) => {
    bagStock.innerText = data.length;
  });
