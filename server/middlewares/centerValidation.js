/**
 * Validates center details
 * @param {object} req The request body of the request.
 * @param {object} res The response body.
 * @param {object} next Passes control to next middleware
 * @returns {object} next
 */
const centerValidation = (req, res, next) => {
  let errors = [];
  let fields = ['Name', 'Description', 'Location', 'Capacity', 'Facilities', 'Price'];

  for (let i = 0; i < fields.length; i++) {
    if (req.body[fields[i].toLowerCase()] === 'undefined') {
      return res.status(400).send({ message: `${fields[i]} is required` });
    }
  }

  console.log("PRICEEEEe ", req.body.price);

  if (Number.isNaN(req.body.price)) {
    return res.status(400).send({ message: 'Price must be a number' });
  }

  for (let i = 0; i < fields.length; i++) {
    if (req.body[fields[i].toLowerCase()].toString().trim() === "") {
      errors.push(`${fields[i]} is required`);
    }
  }


  if (Number.isNaN(parseInt(req.body[fields[3].toLowerCase()], 10))) {
    return res.status(400).send({ message: 'Capacity must be a number' });
  }

  if (errors.length > 0) {
    return res.status(400).send({ message: errors });
  }

  return next();
};

export default centerValidation;
