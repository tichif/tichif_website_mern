const express = require('express');
require('dotenv').config();
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(hpp());
app.use(xss());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
