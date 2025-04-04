const express = require('express');
require('./config/mongoose');
// const session = require('express-session');
const app = express();
const methodOverride = require('method-override');
const routes = require('./config/routes');         // EJS-based
const apiRoutes = require('./config/apiRoutes');   // NEW JSON API
// require('./config/mongoose');
const authRoutes = require('./config/authRoutes');

const port = 3000;

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
// }));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/public', express.static('public'));

app.use('/', authRoutes);

// 👇 API routes
app.use('/api', apiRoutes);

// 👇 Web routes
app.use('/', routes);



app.listen(port, () =>
  console.log(`✅ Server is running on http://localhost:${port}`)
);
