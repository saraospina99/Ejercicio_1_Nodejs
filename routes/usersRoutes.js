const express = require('express');

const userController = require('../controllers/usersController');

const routerUser = express.Router();

routerUser
  .route('/')
  .get(userController.allUsers)
  .post(userController.userCreate);

routerUser
  .route('/:id')
  .get(userController.userById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = routerUser;
