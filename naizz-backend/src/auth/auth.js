const jwt = require("jsonwebtoken");
const privatedKey = require("../auth/private_key");

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    const message =
      "You did not provide an authentication token. Add one to the request header.";
    return res.status(401).json({ message });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, privatedKey);
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      const message = "The user ID is invalid.";
      return res.status(401).json({ message });
    } else {
      req.utilisateurId = userId; 
      next();
    }
  } catch (error) {
    const message = "The user is not authorized to access this resource.";
    return res.status(401).json({ message, data: error });
  }
};
