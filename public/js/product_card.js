export const productCard = (product) => {
  return `
    <div class="product" id="${product.id}">
      <div class="product-header">
        <h3 id="name${product.id}">${product.name}</h3>
      </div>
      <div class="product-info">
        <p>Price: $<span id="price${product.id}">${product.price}</span></p>
        <p>Stock: <span id="stock${product.id}">${product.stock}</span></p>
      </div>
      <div class="product-actions">
        <button class="action-button edit-button" onclick="openModal('${product.id}',1)">Edit</button>
        <button class="action-button delete-button" onclick="openModal('${product.id}',0)">Delete</button>
      </div>
    </div>
  `;
};
