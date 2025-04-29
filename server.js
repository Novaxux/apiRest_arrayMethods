const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/products.routes");
const homeRoutes = require("./routes/home.routes");
const logRequests = require("./middleware/logRequests");
const cors = require("cors");
const {IP,PORT }= require('./config/config')
// matters uppercase and lowercase in routing
app.set("case sensitive routing", true);
// middleware
app.use(logRequests);
app.use(express.json());
app.use(cors());
// settings
app.disable("x-powered-by");
// routes
app.use(productRoutes);
app.use(homeRoutes);
// static files
app.use("/public", express.static(path.join(__dirname, "public")));
// server
app.listen(PORT, IP, () =>
  console.log(`Servidor en http://${IP}:${PORT}`)
);
