const z = require("zod");

const productSchema = z.object({
  name: z.string({
    invalid_type_error: "Product name must be a string",
    required_error: "Product name is required",
  }),
});

module.exports = productSchema;
