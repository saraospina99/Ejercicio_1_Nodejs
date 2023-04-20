const User = require('../models/users.model');

exports.allUsers = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available',
    },
  });

  res.status(200).json({
    message: 'Here, you have all users',
    results: users.length,
    users,
  });
};

exports.userById = async (req, res) => {
  const { user } = req;

  return (
    res.status(200),
    json({
      status: 'success',
      message: 'User has been found',
      user,
    })
  );
};

exports.updateUser = async (req, res) => {
  const { name, email } = req.body;
  const { user } = req;

  await user.update({
    name,
    email,
  });

  return res.status(200).json({
    status: 'success',
    message: 'The user has been updated',
  });
};

exports.deleteUser = async (req, res) => {
  const { user } = req;

  await user.update({
    status: 'disable',
  });

  return res.status(200).json({
    message: 'The user has been deleted',
  });
};
