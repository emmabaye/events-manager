import Model from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = Model.User;

class UserController {
  static signUp(req, res) {
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
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
              },
            },
          });
        }).catch(e => res.status(500).json({
          status: 'Error',
          message: 'Server Error',
        }));
      });
  }


  static signIn(req, res) {
    User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      const validPassword = bcrypt.compareSync(req.body.password, user.password);
      if (!validPassword) {
        return res.status(401).send({ 
          status: 'Fail', 
          message: 'Invalid Password' 
        });
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });

      return res.status(200).send({ 
        status: 'Success', 
        message: "User has been logged in",
        data: {
          token,
          user: {
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role
            }
          }
        }
        });
      })
      .catch(e => res.status(500).json({
        status: 'Error',
         message: 'Server Error',
        }));
  }


  static signOut(req, res) {
    res.setHeader('x-access-token', null);
    return res.status(200).send({
      status: 'Success',
      message: 'User has been logged out',
      data: {
        token: null
      }
    });
  }

  static isAuthenticated(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
        return res.status(401).json({ 
          status: 'Fail',
          message: 'User is not logged in'
        });
    }
    console.log("DECODED ", decoded);
    req.userId = decoded.id;
     return next();
   });
  }

  static isAdmin(req, res, next) {
    User.findById(req.userId)
      .then(user => {
        if(user.role == 'admin') {
          return next();
        }

         return res.status(403).send({
          status: 'Error',
          message: 'User forbidden'
        });
      }) 
  }

}


export default UserController;
