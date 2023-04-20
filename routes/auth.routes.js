const express = require('express');

const validation = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signup', validation.createUserValidation, authController.signup);
router.post('/sigin', validation.loginUserValidation, authController.sigin);
router.use(authMiddleware.protect);
module.exports = router;
