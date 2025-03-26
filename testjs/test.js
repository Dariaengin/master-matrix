const express = require("express");
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.send("Express is running!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server is running on port ${PORT}`));
