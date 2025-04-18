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

export async function editProduct(id) {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
