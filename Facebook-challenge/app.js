const express = require('express');
require('./config/mongoose');
const app = express();
const routes = require('./config/route');     
const port = 1300;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));

// 👇 Web routes
app.use('/', routes);


app.listen(port, () =>
  console.log(`✅ Server is running on http://localhost:${port}`)
);
