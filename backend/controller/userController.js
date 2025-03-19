const homePage = (req, res) => {
    res.send("<h2> Hello Test </h2>")
}
const aboutUser = (req, res) => {
    res.send(`About user..Username is ${req.params.usermane}`)
}
const notFoundPage = (req, res) => {
    res.send("404,Page not found")
}
module.exports = {
    homePage,
    aboutUser,
    notFound
}
// controllers/controller.js
exports.homePage = (req, res) => {
    const data = {
      message: "Hello, World!",
      items: ["Apple", "Banana", "Cherry", "Date"],
    };
    res.render("index", data);
  };
  module.exports = router;