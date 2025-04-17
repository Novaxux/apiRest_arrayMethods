export async function loadProducts() {
  try {
    const response = await fetch("http://localhost:3002/products");
    if (!response.ok) {
      throw new Error("Error to obtain products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:3002/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Error to obtain products");
    }
    const data = await response.json();
    console.log(data)
    // return data;
  } catch (error) {
    console.log(error);
  }
}

