export const productCard = (product)=>{
    return `
            <div class="product" id="${product.id}">
              <h3>${product.name}</h3>
              <p>Price: $${product.price}</p>
              <p>Stock: ${product.stock}</p>
              <button onclick="openDeleteModal('${product.id}')">delete</button>
            </div>
          `
}