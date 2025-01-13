import { fetchProducts, deleteProduct } from './api.js';

const productList = document.querySelector('.product-list');

export async function renderProducts() {
  const products = await fetchProducts();
  productList.innerHTML = products.length
    ? products.map(product => createProductCard(product)).join('')
    : '<p>No se han agregado productos</p>';
}

function createProductCard(product) {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
      <p>$${product.price}</p>
      <button data-id="${product.id}" class="delete-btn">Eliminar</button>
    </div>
  `;
}

productList.addEventListener('click', async e => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.dataset.id;
    await deleteProduct(id);
    renderProducts();
  }
});
