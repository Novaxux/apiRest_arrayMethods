export const deleteModal = () => {
  return `
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>Confirm elimination</h2>
          <button type="button" class="close-button" id="closeDialog">
            &times;
          </button>
        </div>
        <div class="dialog-body">
          <p>Are you sure you want to eliminate this product?</p>
        </div>  
        <div class="dialog-footer">
          <button id="cancel" class="button-secondary">Cancel</button>
          <button id="confirmDelete" class="button-danger">Eliminate</button>
        </div>
      </div>
    `;
};
