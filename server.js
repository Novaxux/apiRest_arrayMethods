const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/products.routes");
const homeRoutes = require("./routes/home.routes");
const logRequests = require("./middleware/logRequests");
const cors = require("cors");
// matters uppercase and lowercase in routing
app.set("case sensitive routing", true);
// middleware
app.use(logRequests);
app.use(express.json());
app.use(cors());
// settings
app.disable("x-powered-by");
app.set("port", 3002);
// routes
app.use(productRoutes);
app.use(homeRoutes);
// static files
app.use("/public", express.static(path.join(__dirname, "public")));
// server
app.listen(app.get("port"), "0.0.0.0", () =>
  console.log(`Servidor en http://localhost:${app.get("port")}`)
);
