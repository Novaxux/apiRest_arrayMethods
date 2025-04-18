import { loadProducts } from "./api.js";
import { deleteProduct } from "./api.js";
import { productCard } from "./product_card.js";

// Variable global para rastrear qué producto se está eliminando
let productToDelete = null;

document.getElementById("loadProducts").addEventListener("click", async () => {
  const productContainer = document.getElementById("productContainer");
  const loadingIndicator = document.getElementById("loadingIndicator");

  productContainer.innerHTML = "";
  loadingIndicator.style.display = "block";

  try {
    const products = await loadProducts();
    loadingIndicator.style.display = "none";

    products.forEach((product) => {
      productContainer.innerHTML += productCard(product);
    });
  } catch (error) {
    loadingIndicator.style.display = "none";
    productContainer.innerHTML =
      '<div class="error-message">Error al cargar productos.</div>';
    console.error(error);
  }
});
const deleteDialog = document.getElementById("deleteModal");

// Cerrar el diálogo con el botón de cierre
document.getElementById("closeDialog").addEventListener("click", () => {
  deleteDialog.close();
});

// Cerrar el diálogo con el botón cancelar
document.getElementById("cancelDelete").addEventListener("click", () => {
  deleteDialog.close();
});

window.openDeleteModal = function (productId) {
  productToDelete = productId;
  deleteDialog.showModal();
};
// Manejar la confirmación de eliminación
document.getElementById("confirmDelete").addEventListener("click", async () => {
  try {
    await deleteProduct(productToDelete);
    document.getElementById(productToDelete).remove();
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
  } finally {
    deleteDialog.close();
  }
});
