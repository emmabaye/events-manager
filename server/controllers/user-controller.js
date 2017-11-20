import Model from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = Model.User;

class UserController {
  static signUp(req, res, next) {
  	const hash = bcrypt.hashSync(req.body.password, 7);
  	User.findOne({ where: { email: req.body.email.trim().toLowerCase() } })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(409).send({
            status: 'Error',
            message: 'Email has already been used',
          });
        }

        User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        }).then((user) => {
          const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });
          return res.status(200).json({
            status: 'Succcess',
            message: 'User has been logged in',
            data: {
              token,
              user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
              },
            },
          });
        }).catch(e => res.status(500).json({
          status: 'Error',
          message: 'Server Error',
        }));
      });
  }
}


export default UserController;
