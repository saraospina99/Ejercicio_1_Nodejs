const express = require('express');

const routerUser = require('./routes/usersRoutes');
const routerRepair = require('./routes/repairsRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', routerUser);

app.use('/api/v1/repairs', routerRepair);

module.exports = app;
