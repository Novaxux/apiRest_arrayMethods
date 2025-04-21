export const alertModal = (message) => {
    return `
        <div class="dialog-content">
          <div class="dialog-header">
            <h2>${message.header}</h2>
          </div>
          <div class="dialog-body">
            <p>${message.body}</p>
          </div>  
        </div>
      `;
  };
