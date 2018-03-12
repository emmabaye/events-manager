import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Model from '../models';

const { User } = Model;

/** Class for User Controller functions */
class UserController {
  /**
   * Create a new user
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static signUp(req, res) {
    User.findOne({ where: { email: req.body.email.trim().toLowerCase() } })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(409).send({
            status: 'Error',
            message: 'Email has already been used',
          });
        }

        const hash = bcrypt.hashSync(req.body.password, parseInt(process.env.SALT, 10));

        User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email.trim().toLowerCase(),
          password: hash,
        }).then((user) => {
          const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET, { expiresIn: 86400 * 14 });
          return res.status(200).json({
            status: 'Success',
            message: 'User has been logged in',
            data: {
              token,
              user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
              },
            },
          });
        }).catch(e => res.status(500).json({
          status: 'Error',
          message: 'Server Error',
        }));
      });
  }

  /**
   * Sign in a user
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static signIn(req, res) {
    User.findOne({ where: { email: req.body.email.trim().toLowerCase() } })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            status: 'Error',
            message: 'Email has not been registered',
          });
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
          return res.status(401).send({
            status: 'Error',
            message: 'Invalid Password',
          });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET, { expiresIn: 86400 });

        return res.status(200).send({
          status: 'Success',
          message: 'User has been logged in',
          data: {
            token,
            user: {
              user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
              },
            },
          },
        });
      })
      .catch(e => res.status(500).json({
        status: 'Error',
        message: 'Server Error',
      }));
  }

  /**
   * Logs out a user
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static signOut(req, res) {
    res.setHeader('x-access-token', null);
    return res.status(200).send({
      status: 'Success',
      message: 'User has been logged out',
      data: {
        token: null,
      },
    });
  }


  /**
    * Get details of an user by Id
    * @param {object} req The request body of the request.
    * @param {object} res The response body.
    * @returns {object} res.
    */
  static getUser(req, res) {
    User.findOne({
      where: { id: req.params.userId },
      include: [Model.Event],
      attributes: { exclude: ['password'] },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ error: 'User not found' });
        }

        res.status(200).send({
          status: 'Success',
          message: 'User found',
          data: user,
        });
      });
  }

  /**
   * Update user details
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static updateUser(req, res) {
    User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ error: 'User not found' });
        }

        if ((req.userId !== user.id) && (req.userRole !== 'admin')) {
          return res.status(403).send({ error: 'You do not have privilege to modify this user', id: req.user });
        }

        User.update({
          firstName: req.body.firstName || user.firstName,
          lastName: req.body.lastName || user.lastName,
          role: (req.userRole === 'admin') ? req.body.role || user.role : user.role,
        }, {
          where: {
            id: req.params.userId,
          },
        }).then((updatedUser) => {
          if (!updatedUser) {
            res.status(500).send({
              status: ' Server Error',
              message: 'Cannot update user',
            });
          }

          res.status(200).send({
            status: 'Success',
            message: 'user Updated',
            data: updatedUser,
          });
        });
      });
  }
}


export default UserController;
