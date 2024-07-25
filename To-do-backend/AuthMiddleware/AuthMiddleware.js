const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.MY_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    throw new Error('User not found');
  }
  req.user = user;
  next();
};

module.exports = auth;
