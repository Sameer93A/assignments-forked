const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  // Check if Authorization header is present
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).json({
      msg: "Token is missing in headers",
    });
  }

  // Extract the token from the header
  const words = tokenHeader.split(" ");
  const jwtToken = words[1];

  try {
    // Verify the token
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    // Check if the decoded token contains a username
    if (decodedValue.username) {
      // User is authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // Invalid token without username
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (err) {
    // Token verification failed
    res.status(401).json({
      msg: "Invalid token",
    });
  }
}

module.exports = userMiddleware;
