const path = require('path');

const express = require('express');
require('dotenv').config();
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');

const errorHandler = require('./middleware/error');
const ErrorResponse = require('./utils/ErrorResponse');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(hpp());
app.use(xss());

app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/images', express.static(path.join(__dirname, 'images')));

app.use(errorHandler);

// Handle unsupported routes handler
app.use((req, res, next) => {
  const error = new ErrorResponse("Cette route n'existe pas.", 404);
  next(error);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on ${PORT}`));

// Handle  unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server and exit process
  app.close(() => process.exit(1));
});
