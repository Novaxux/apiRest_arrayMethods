let requestCount = 0;
const logRequest = (req, res, next) => {
  requestCount++;
  console.log(
    `petition #${requestCount} route: ${req.url}, method:${req.method}, hostname:${req.hostname}`
  );
  next();
};

module.exports = logRequest;
