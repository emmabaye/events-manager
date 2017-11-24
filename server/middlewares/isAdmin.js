import Model from '../models';

const { User } = Model;

/**
   * Checks if a user is admin
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  const isAdmin = (req, res, next) => {
    User.findById(req.userId)
      .then((user) => {
        if (user.role == 'admin') {
          return next();
        }

        return res.status(403).send({
          status: 'Error',
          message: 'User forbidden',
          data: user,
        });
      });
  }

  export default isAdmin;