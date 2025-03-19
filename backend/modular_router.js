const express = require("express")
const app = express()
const miniapp = express.Router()

miniapp.get("/home", (request, response, next) => {
  const url = request.originalUrl
  response.status(200).send(`You are visiting /home from ${url}`)
})
app.use("/first", miniapp)
app.use("/second", miniapp)
app.listen(3000, () => console.log("Web Server running on port 3000"))