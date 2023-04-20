const express = require('express');

const userController = require('../controllers/users.controller');
// const authController = require('../controllers/auth.controller');

const userMiddleware = require('../middlewares/user.middleware');
const validation = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);
router.get('/', userController.allUsers);

router
  .route('/:id')
  .get(userMiddleware.validIfExistUser, userController.userById)
  .patch(
    userMiddleware.validIfExistUser,
    validation.updateUserValidation,
    authMiddleware.protectAccountOwner,
    userController.updateUser
  )
  .delete(
    userMiddleware.validIfExistUser,
    authMiddleware.restrictTo('employe'),
    userController.deleteUser
  );

module.exports = router;
