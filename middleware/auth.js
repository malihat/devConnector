const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });

module.exports = function (req, res, next) {
  // Get token from the header so that its protected
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // take the request object and assign a value to user. Decoded a user, its the payload when jwt was made
    req.user = decoded.user; 
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
