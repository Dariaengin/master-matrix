const express = require('express');
const routes = require('./config/routes');
const app = express();
const port = 3300;

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use(routes);
app.listen(port, "0.0.0.0", () =>
    console.log(`Server is running on http://localhost:3300`)
    // console.log(`Server is running on http://localhost:${port}`)
  );
// console.log(`Server is running on http://localhost:4000`)
// );