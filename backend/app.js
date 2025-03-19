const express = require("express");
const app = express();
const port = 3000;
const routes = require("./config/routes");
app.set("view engine", "ejs");
// Set EJS as the view engine
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});