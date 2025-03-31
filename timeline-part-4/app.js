const express = require('express');
const methodOverride = require('method-override');
const routes = require('./config/routes');         // EJS-based
const apiRoutes = require('./config/apiRoutes');   // NEW JSON API
require('./config/mongoose');

const app = express();
const port = 3300;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

// 👇 API routes
app.use('/api', apiRoutes);

// 👇 Web routes
app.use('/', routes);



app.listen(port, () =>
  console.log(`✅ Server is running on http://localhost:${port}`)
);
