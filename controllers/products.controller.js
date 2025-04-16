let products = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "watermelon" },
];

// const getHome = (req, res) => {
//   res.sendFile("index.html", { root: __dirname });
// };

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  product
    ? res.json(product)
    : res.status(404).json({ message: "product not found" });
};

const createProduct = (req, res) => {
  let id = 1;
  while (products.find((p) => p.id === id)) {
    id++;
  }
  const productObject = { id, ...req.body };
  products.push(productObject);
  res.send(productObject);
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  products = products.filter((p) => p.id !== productId);
  res.json({ message: "product deleted" });
};

const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const newData = req.body;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  products = products.map((p) =>
    p.id === productId ? { ...p, ...newData } : p
  );
  res.json({ message: "product updated" });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
