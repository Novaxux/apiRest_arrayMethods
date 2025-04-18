import { loadProducts } from "./api.js";
import { deleteProduct } from "./api.js";
import { productCard } from "./product_card.js";
import { deleteModal } from "./deleteModal.js";
import { editModal } from "./editModal.js";
// Variable global para rastrear qué producto se está eliminando
let productToChange = null;
const modals = [deleteModal, editModal];
const apiRequests = [deleteProduct, loadProducts];
const modalConfirmIds = ["confirmDelete"];

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
    console.error(error);
  }
});

const dialog = document.getElementById("dialog");

function asignateEvents(index) {
  const closeBtn = document.getElementById("closeDialog");
  if (closeBtn) closeBtn.addEventListener("click", () => dialog.close());

  const cancelBtn = document.getElementById("cancel");
  if (cancelBtn) cancelBtn.addEventListener("click", () => dialog.close());

  confirmEvent(index, true);
}

window.openModal = function (productId, modalIndex) {
  dialog.innerHTML = modals[modalIndex]();
  productToChange = productId;
  dialog.showModal();
  asignateEvents(modalIndex);
};

function confirmEvent(index, once_) {
  const id = modalConfirmIds[index];
  // console.log(id);
  document.getElementById(id).addEventListener(
    "click",
    async () => {
      try {
        const data = await apiRequests[index](productToChange);
        if (index == 0) document.getElementById(productToChange).remove();
        if (data) console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        dialog.close();
      }
    },
    { once: once_ }
  );
}
