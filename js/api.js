const API_URL = 'http://localhost:3000/products';

export async function fetchProducts() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error al obtener los productos');
  return response.json();
}

export async function addProduct(product) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Error al agregar el producto');
}

export async function deleteProduct(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Error al eliminar el producto');
}
