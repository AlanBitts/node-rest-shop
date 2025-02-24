const express = require('express');
const app = express();

const produtRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', produtRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
