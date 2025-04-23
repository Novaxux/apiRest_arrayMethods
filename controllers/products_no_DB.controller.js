// const getProducts = (req, res) => {
//   res.json(products);
// };

// const getProductById = (req, res) => {
//   // const productId = parseInt(req.params.id);
//   const productId = req.params.id;
//   const product = products.find((p) => p.id === productId);
//   product ? res.json(product) : res.status(404).send();
// };

// const createProduct = (req, res) => {
//   const productObject = { id: crypto.randomUUID(), ...req.validatedData };
//   products.push(productObject);
//   res.status(201).send(productObject);
// };

// const deleteProduct = (req, res) => {
//   const productId = req.params.id;
//   const product = products.find((p) => p.id === productId);
//   if (!product) {
//     return res.status(404).send();
//   }
//   products = products.filter((p) => p.id !== productId);
//   res.status(204).send();
// };

// const updateProduct = (req, res) => {
//   const productId = req.params.id;

//   const product = products.find((p) => p.id === productId);
//   if (!product) {
//     return res.status(404);
//   }
//   products = products.map((p) =>
//     p.id === productId ? { ...p, ...req.validatedData } : p
//   );
//   res.status(200).send();
// };