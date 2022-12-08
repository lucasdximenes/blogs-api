require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../api-documentation.json');
const routes = require('./routes');
const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorMiddleware);

module.exports = app;
