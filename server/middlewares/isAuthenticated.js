import jwt from 'jsonwebtoken';

/**
   * Checks if a user is authenticated
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  const isAuthenticated =  (req, res, next) => {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 'Fail',
          message: 'User is not logged in',
        });
      }
      req.userId = decoded.id;
      req.userRole = decoded.role;
      return next();
    });
  }

  export default isAuthenticated;