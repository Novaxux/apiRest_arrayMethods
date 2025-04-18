const z = require("zod");

const productSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Product name must be a string",
      required_error: "Product name is required",
    }).min(1).max(20)
    .toLowerCase(),
  price: z.number().positive({
    message: "Price must be a positive number",
  }),
  stock: z.number().int().positive(),
});

module.exports = productSchema;
