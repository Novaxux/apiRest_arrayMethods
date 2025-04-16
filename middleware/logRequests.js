const logRequest = (req, res, next) => {
  console.log(
    `route: ${req.url}, method:${req.method}, hostname:${req.hostname}`
  );
  next();
};

module.exports = logRequest;
