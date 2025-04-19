export const addProductModal = () => {
  return `
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>Add Product</h2>
          <button class="close-button" id="closeDialog">&times;</button>
        </div>
        <div class="dialog-body">
          <form id="addProductForm">
            <div class="form-group">
              <label for="productName">Name:</label>
              <input
                type="text"
                required
                id="productName"
                name="name"
                class="form-input"
                required
              />
            </div>
            <div class="form-group">
              <label for="productPrice">Price:</label>
              <div class="price-input-wrapper">
                <span class="currency-symbol">$</span>
                <input
                  type="number"
                  required
                  id="productPrice"
                  name="price"
                  step="0.01"
                  min="0"
                  class="form-input"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="productStock">Stock:</label>
              <input
                type="number"
                required
                id="productStock"
                name="stock"
                min="0"
                class="form-input"
                required
              />
            </div>
            <input type="hidden" id="productId" />
            <div class="dialog-footer">
              <button type="button" class="button-secondary" id="cancel">Cancel</button>
              <button type="submit" class="button-primary" id="addProduct">
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
      `;
};
