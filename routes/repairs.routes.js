const express = require('express');

const repairController = require('../controllers/repairs.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const validation = require('../middlewares/validations.middleware');
const RepairMiddleware = require('../middlewares/repairs.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router
  .route('/')
  .get(repairController.allRepairs)
  .post(validation.createRepairValidation, repairController.repairCreate);

router
  .use('/:id', RepairMiddleware.validIfExistRepair)
  .route('/:id')
  .get(repairController.repairById)
  .patch(
    validation.createRepairValidation,
    authMiddleware.protectAccountOwner,
    repairController.repairUpdate
  )
  .delete(authMiddleware.protectAccountOwner, repairController.repairDelete);

module.exports = router;
