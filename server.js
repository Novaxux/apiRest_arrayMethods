const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/products.routes");
const homeRoutes = require("./routes/home.routes");
const logRequests = require("./middleware/logRequests");
// settings
app.set("port", 3002);
// matters uppercase and lowercase in routing
app.set("case sensitive routing", true);
// middleware
app.use(logRequests);
app.use(express.json());
// routes
app.use(productRoutes);
app.use(homeRoutes);
// static files
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () =>
  console.log(`Servidor en http://localhost:${app.get("port")}`)
);
