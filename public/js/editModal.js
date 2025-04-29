export const editModal = () => {
  return `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>Edit Product</h2>
        <button class="close-button" id="closeDialog">&times;</button>
      </div>
      <div class="dialog-body">
        <form id="editProductForm">
          <div class="form-group">
            <label for="productName">Name:</label>
            <input type="text" id="productName" placeholder="optional" name="name" class="form-input" required>
          </div>
          <div class="form-group">
            <label for="productPrice">Price:</label>
            <div class="price-input-wrapper">
              <span class="currency-symbol">$</span>
              <input type="number" id="productPrice" placeholder="optional" name="price" step="0.01" min="0" class="form-input" required>
            </div>
          </div>
          <div class="form-group">
            <label for="productStock">Stock:</label>
            <input type="number" id="productStock" placeholder="optional" name="stock" min="0" class="form-input" required>
          </div>
          <input type="hidden" id="productId">
        </form>
      </div>
      <div class="dialog-footer">
        <button class="button-secondary" id="cancel">Cancel</button>
        <button class="button-primary" id="saveEdit">Save Changes</button>
      </div>
    </div>
    `;
};
