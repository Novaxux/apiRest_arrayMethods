export const productCard = (product) => {
  return `
    <tr id="${product.id}">
      <td id="name${product.id}">${product.name}</td>
      <td>$<span id="price${product.id}">${product.price}</span></td>
      <td><span id="stock${product.id}">${product.stock}</span> units</td>
      <td>
        <button class="action-button edit-button" onclick="openModal('${product.id}',1)" aria-label="Edit product">
          ✏️
        </button>
        <button class="action-button delete-button" onclick="openModal('${product.id}',0)" aria-label="Delete product">
          🗑️
        </button>
      </td>
    </tr>
  `;
}
