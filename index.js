const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const api = require("./api");
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/default");

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/whoami", (req, res) => {
  api.showRequestHeaders(req, res);
});

app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
