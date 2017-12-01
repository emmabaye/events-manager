import validator from 'validator';

class userValidation {

  static signUp(req, res, next) {
    let errors = []
    if (req.body.email == undefined) {
      errors.push("Email is required");
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }

    if (!validator.isEmail(req.body.email.toString())) {
      errors.push("Valid email required");
    }

    if (req.body.firstName == undefined) {
      errors.push(" First name is required");
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }

    if (!validator.isAlpha(req.body.firstName.toString())) {
      errors.push("First name must be alphabetic");
    }


    if (req.body.firstName == '') {
      errors.push("First name cannot be empty");
    }

    if (req.body.firstName.length <= 1) {
      errors.push("Length of first name should be greater than 1 character");
    }

    if (req.body.lastName == undefined) {
      errors.push("Last name is required");
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }

    if (!validator.isAlpha(req.body.lastName.toString())) {
      errors.push("Last name must be alphabetic");
    }

    if (req.body.lastName == '') {
      errors.push("Last name cannot be empty");
    }

    if (req.body.lastName.length <= 1) {
      errors.push("Length of last name should be greater than 1 character");
    }

    if (req.body.password == undefined) {
      errors.push("Valid password required");
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }

    if (req.body.password.length <= 6) {
      errors.push("Password must exceed 6 characters");
    }

    if (errors.length > 0) {
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    return next();
  }

  static signIn(req, res, next) {
    let errors = []
    if (req.body.email == undefined) {
      errors.push("Email is required");
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }

    if (!validator.isEmail(req.body.email.toString())) {
      errors.push("Valid email required");
    }

    if (req.body.password == undefined) {
      errors.push("Valid password required");
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }

    if (req.body.password.length <= 6) {
      errors.push("Password must exceed 6 characters");
    }

    if (errors.length > 0) {
      return res.status(400).send({
        status:'Error',
        message: errors
      });
    }
    return next();
  }


}




export default userValidation;