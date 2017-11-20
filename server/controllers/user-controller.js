import Model from '../models';

const User = Model.User;

class UserController {
	static signUp(req, res) {
		console.log("Got in")
  		 User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password:req.body.password
        }).then((user) => {
          return res.send(user);
        }).
        catch(e => {
        	console.log("Banana Error: ",e)
        });
	}
}

export default UserController;