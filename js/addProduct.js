import { addProduct } from './api.js';
import { renderProducts } from './renderProducts.js';

const addProductForm = document.querySelector('#add-product-form');

addProductForm.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.querySelector('#product-name').value.trim();
  const price = parseFloat(document.querySelector('#product-price').value);
  const image = document.querySelector('#product-image').value.trim();

  if (!name || isNaN(price) || !image) {
    alert('Por favor completa todos los campos');
    return;
  }

  await addProduct({ name, price, image });
  addProductForm.reset();
  renderProducts();
});
