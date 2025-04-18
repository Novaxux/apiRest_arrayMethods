export async function loadProducts() {
  try {
    const response = await fetch("http://localhost:3002/products");
    if (!response.ok) {
      throw new Error("Error to obtain products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:3002/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error to obtain products");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
}

export async function editProduct(params) {
  try {
    const response = await fetch(
      `http://localhost:3002/products/${params.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name: params.name,
          price: parseInt(params.price),
          stock: parseInt(params.stock),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = response.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
}
