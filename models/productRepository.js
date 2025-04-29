const pool = require("../config/db");

class ProductModel {
  static async selectAll() {
    const [result] = await pool.query(
      "SELECT * FROM products ORDER BY name ASC"
    );
    return result;
  }

  static async selectById(id) {
    const [product] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    return product;
  }

  static async insert(_id, data) {
    const productObject = { id: _id, ...data };
    const values = Object.values(productObject);
    await pool.query(
      "INSERT INTO products (id, name, price, stock) VALUES (?, ?, ?, ?)",
      values
    );
    return productObject;
  }

  static async deleteById(id) {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [
      id,
    ]);
    return result;
  }

  static async update(id, fields, values) {
    const [result] = await pool.query(
      `UPDATE products SET ${fields} WHERE id = ?`,
      [...values, id]
    );
    return result;
  }
}

module.exports = ProductModel;
