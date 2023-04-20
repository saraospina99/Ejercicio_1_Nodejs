const Repair = require('../models/repairs.model');

exports.allRepairs = async (req, res, next) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  res.status(200).json({
    message: 'The query has been done success',
    results: repairs.length,
    repairs,
  });
};

exports.repairById = async (req, res, next) => {
  const { repair } = req;

  return res.status(200).json({
    status: 'success',
    message: 'Repair has been found',
    repair,
  });
};

exports.repairCreate = async (req, res) => {
  const { date } = req.body;

  const repair = await Repair.create({
    date,
    userId: sessionUser.id,
  });

  res.status(201).json({
    status: 'success',
    message: 'The repair has been created',
    repair,
  });
};

exports.repairUpdate = async (req, res) => {
  const { name, email } = req.body;
  const { repair } = req;

  await repair.update({
    where: {
      name,
      email,
      status: 'completed',
    },
  });

  return res.status(200).json({
    status: 'success',
    message: 'The repair has been updated',
  });
};

exports.repairDelete = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'the repair not found',
    });
  }

  await repair.update({
    status: 'cancelled',
  });

  res.json({
    message: 'The repair has been deleted',
  });
};
