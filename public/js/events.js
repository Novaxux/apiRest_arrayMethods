import { loadProducts } from "./api.js";
import { deleteProduct } from "./api.js";

document.getElementById("loadProducts").addEventListener("click", async () => {
  const productContainer = document.getElementById("productContainer");
  const loadingIndicator = document.getElementById("loadingIndicator");

  productContainer.innerHTML = "";
  loadingIndicator.style.display = "block";

  try {
    const products = await loadProducts();
    loadingIndicator.style.display = "none";

    products.forEach((product) => {
      productContainer.innerHTML += `
            <div class="product">
              <h3>${product.name}</h3>
              <p>Precio: $${product.price}</p>
              <p>Stock: ${product.stock}</p>
              <button onclick="handleDelete('${product.id}')">delete</button>
            </div>
          `;
    });
  } catch (error) {
    loadingIndicator.style.display = "none";
    productContainer.innerHTML =
      '<div class="error-message">Error al cargar productos.</div>';
    console.error(error);
  }
});
window.handleDelete = async function (id) {
  try {
    await deleteProduct(id);
    document.getElementById("loadProducts").click(); // o actualizar la lista
  } catch (err) {
    console.error("Error al eliminar:", err);
  }
};
