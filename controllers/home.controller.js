const path = require("path");

const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

module.exports = {
  getHome,
};
