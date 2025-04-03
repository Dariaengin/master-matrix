const express = require('express');
require('./config/mongoose');  


const app = express();
const port = 1400;

const authRoutes = require('./config/route');
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));


app.use('/', authRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
