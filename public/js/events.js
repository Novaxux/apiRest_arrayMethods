import { productCard } from "./product_card.js";
import { deleteModal } from "./deleteModal.js";
import { editModal } from "./editModal.js";
import { alertModal } from "./alertModal.js";
import { addProductModal } from "./addProductModal.js";
import { api } from "./api.js";
// Variable global para rastrear qué producto se está eliminando
let productToChange = null;

const modals = [deleteModal, editModal];
const apiRequests = [api.deleteProduct, api.editProduct];
const modalConfirmIds = ["confirmDelete", "saveEdit"];

const productContainer = document.getElementById("productContainer");
const loadingIndicator = document.getElementById("loadingIndicator");
const dialog = document.getElementById("dialog");

window.addEventListener("DOMContentLoaded", async () => {
  await GenerateAllProductCards();
});

// add product event
document.getElementById("addProduct").addEventListener("click", () => {
  dialog.innerHTML = addProductModal();
  dialog.showModal();
  document.getElementById("addProductForm").addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();
      try {
        const params = extractProductData();
        const productInfo = await api.postProduct(params);
        productContainer.innerHTML += productCard(productInfo);
        showAlert({header:'Succes', body: 'Product Added'});
      } catch (error) {
        showAlert(JSON.parse(error.message));
      } finally {
        dialog.close();
      }
    },
    { once: true }
  );
  closeModalEvent();
});
document.getElementById("search-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const searchId = document.getElementById("searchInput").value.trim();
    if (searchId === "") {
      await GenerateAllProductCards();
    } else {
      const product = await api.getProduct(searchId);
      productContainer.innerHTML = productCard(product);
    }
    document.getElementById("searchInput").value = "";
  } catch (error) {
    showAlert(JSON.parse(error.message));
  }
});

function asignateEvents(index) {
  closeModalEvent();
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
  document.getElementById(id).addEventListener(
    "click",
    async () => {
      try {
        let data;
        if (index == 0) {
          data = await apiRequests[index](productToChange);
          document.getElementById(productToChange).remove();
        }
        if (index == 1) {
          const params = extractProductData(true);
          data = await apiRequests[index](params);
          updateProductTags(params);
        }
        if (data) showAlert(data);
        // dialog.close();
      } catch (error) {
        showAlert(JSON.parse(error.message));
      } finally {
        dialog.close();
      }
    },
    { once: once_ }
  );
}

function updateProductTags(params) {
  const nameTag = document.getElementById(`name${productToChange}`);
  const priceTag = document.getElementById(`price${productToChange}`);
  const stockTag = document.getElementById(`stock${productToChange}`);
  if (params.name !== undefined) nameTag.innerHTML = params.name;
  if (params.price !== undefined) priceTag.innerHTML = params.price;
  if (params.stock !== undefined) stockTag.innerHTML = params.stock;
}
function extractProductData(isEdit = false) {
  const name = document.getElementById("productName").value.trim();
  const stock = parseInt(document.getElementById("productStock").value);
  const price = Number(document.getElementById("productPrice").value);

  const data = {};
  if (name) data.name = name;
  if (stock) data.stock = stock;
  if (price) data.price = price;
  if (isEdit) data.id = productToChange;

  return data;
}
function closeModalEvent() {
  const closeBtn = document.getElementById("closeDialog");
  if (closeBtn)
    closeBtn.addEventListener("click", () => dialog.close(), { once: true });

  const cancelBtn = document.getElementById("cancel");
  if (cancelBtn)
    cancelBtn.addEventListener("click", () => dialog.close(), { once: true });
}

async function GenerateAllProductCards() {
  productContainer.innerHTML = "";
  loadingIndicator.style.display = "block";

  try {
    const products = await api.getAllProducts();
    loadingIndicator.style.display = "none";

    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = productCard(product);
      fragment.append(...wrapper.childNodes);
    });
    productContainer.appendChild(fragment);
  } catch (error) {
    console.error(error);
  }
}

const showAlert = (message) => {
  const alertDialog = document.getElementById("alert");
  alertDialog.innerHTML = alertModal(message);

  alertDialog.classList.add("show");
  alertDialog.open = true;

  setTimeout(() => {
    alertDialog.classList.remove("show");
    setTimeout(() => {
      alertDialog.close();
    }, 500);
  }, 3000);
};

// setInterval(GenerateAllProductCards, 10000);
