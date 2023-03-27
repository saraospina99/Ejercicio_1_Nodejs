const express = require('express');

const repairController = require('../controllers/repairsController');

const routerRepair = express.Router();

routerRepair
  .route('/')
  .get(repairController.allRepairs)
  .post(repairController.repairCreate);

routerRepair
  .route('/:id')
  .get(repairController.repairById)
  .patch(repairController.repairUpdate)
  .delete(repairController.repairDelete);

module.exports = routerRepair;
