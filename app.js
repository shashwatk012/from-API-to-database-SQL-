const express = require("express");
const app = express();
const router = require("./router ");
const hbs = require("hbs");
const path = require("path");
const port = 8000;
// console.log(port);

const staticpath = path.join(__dirname, "./static");
app.use("/static", express.static(staticpath));

const partialspath = path.join(__dirname, "./views/templates");
hbs.registerPartials(partialspath);

app.set("views", "./views");
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

// simple query

app.listen(port, () => {
  console.log(`Running on 8000`);
});
