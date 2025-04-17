const { get } = require("http");
const path = require("path");

const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};
const getAbout = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
};

module.exports = {
  getHome,
  getAbout
};
