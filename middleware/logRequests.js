let requestCount = 0;
const logRequest = (req, res, next) => {
  requestCount++;
  console.log(
    `petition #${requestCount} route: ${req.url}, method: ${req.method},   client ip: ${req.ip}`
  );
  next();
};

module.exports = logRequest;
