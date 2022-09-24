const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 4828;
console.log(PORT);
const router = require('./Router/Api');

app.use('/', router);
app.listen(PORT);