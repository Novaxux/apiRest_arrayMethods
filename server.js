const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/products.routes");
const homeRoutes = require("./routes/home.routes");
const logRequests = require("./middleware/logRequests");
app.set("port", 3002);
// matters uppercase and lowercase in routing
app.set("case sensitive routing", true);
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
// middleware
app.use(logRequests);
app.use(productRoutes);
app.use(homeRoutes);

app.listen(app.get("port"), () =>
  console.log(`Servidor en http://localhost:${app.get("port")}`)
);
