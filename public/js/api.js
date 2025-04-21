class ApiCalls {
  constructor(ip = "192.168.50.167", port = 3002) {
    this.baseUrl = `http://${ip}:${port}`;
  }

  loadProducts = async () => {
    try {
      const response = await fetch(`${this.baseUrl}/products`);
      if (!response.ok) {
        throw new Error("Error to obtain products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  deleteProduct = async (id) => {
    try {
      const response = await fetch(`${this.baseUrl}/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(
          JSON.stringify({
            header: "status " + response.status,
            body: "Product to delete not found",
          })
        );
      }
      return `Product with id: ${id} successfully deleted`;
    } catch (error) {
      throw error;
    }
  };

  editProduct = async (params) => {
    try {
      const response = await fetch(`${this.baseUrl}/products/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(params),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        if (response.status === 404)
          throw new Error(
            JSON.stringify({
              header: "status " + response.status,
              body: "Product to edit not found",
            })
          );
        if (response.status === 400) {
          const error = await response.json();
          throw new Error(
            JSON.stringify({
              header: "Invalid format",
              body: JSON.stringify(error.errors.fieldErrors ),
            })
          );
        }
      }
    } catch (error) {
      throw error;
    }
  };

  getProduct = async (id) => {
    try {
      const response = await fetch(`${this.baseUrl}/products/${id}`);
      if (!response.ok) {
        throw new Error(
          JSON.stringify({
            header: "status " + response.status,
            body: `Product with id:${id} not found`,
          })
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  postProduct = async (params) => {
    try {
      const response = await fetch(`${this.baseUrl}/products`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          JSON.stringify({
            header: "Invalid format",
            body: JSON.stringify(error.errors),
          })
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export const api = new ApiCalls();

export { ApiCalls };
