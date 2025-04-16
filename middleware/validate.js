const validate = (schema, partial) => (req, res, next) => {
  const result = partial
    ? schema.partial().safeParse(req.body)
    : schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }
  req.validatedData = result.data;
  next();
};

module.exports = validate;
