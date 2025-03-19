const express = require("express");
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app
  .route("/home")
  .get((request, response, nextHandler) => {
    response.type("text/html");
    response.write("<!DOCTYPE html>");
    nextHandler();
  })
  .get((request, response) => {
    response.end(`
      <html lang="en">
       <head>
        <meta charset="utf-8">
        <title>WebApp by ExpressJS</title>
       </head>
       <body role="application">
         <h2>Press send!</h2>
         <form method="post" action="/home">
           <input type="text" name="userInput"/>
           <button type="submit">Send</button>
         </form>
       </body>
      </html>
   `);
  })
  .post((request, response) => {  // Parse form data
    let userInput = request.body.userInput;
    response.send(`Got it! You sent: ${userInput}`);
  });

app.get("/", (req, res) => {
  res.send("Express is running!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server is running on port ${PORT}`));
