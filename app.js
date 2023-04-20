const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

//rutas
const routerAuth = require('./routes/auth.routes');
const routerRepair = require('./routes/repairs.routes');
const routerUser = require('./routes/users.routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

//rutas
app.use('/api/v1/auth', routerAuth);
app.use('/api/v1/users', routerUser);
app.use('/api/v1/repairs', routerRepair);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
