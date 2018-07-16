/**
 * Validates event details
 * @param {object} req The request body of the request.
 * @param {object} res The response body.
 * @param {object} next Passes control to next middleware
 * @returns {object} next
 */
const eventValidation = (req, res, next) => {
  let errors = [];
  if (req.body.title === undefined) {
    return res.status(400).send({ message: "Title is required" });
  }

  if (req.body.description === undefined) {
    return res.status(400).send({ message: "Description is required" });
  }

  if (req.body.venue === undefined) {
    return res.status(400).send({ message: "Venue is required" });
  }

  if (req.body.venue.toString().trim() === "") {
    return res.status(400).send({ message: "Venue is required" });
  }

  if (req.body.startDate === undefined) {
    return res.status(400).send({ message: "Start Date is required" });
  }
  if (req.body.endDate === undefined) {
    return res.status(400).send({ message: "End Date is required" });
  }
  if ((new Date(req.body.startDate) - Date.now()) + 86400000 < 0) {
    return res.status(400).send({ message: 'Cannot set a past date for event' });
  }
  if ((new Date(req.body.endDate) - Date.now()) + 86400000 < 0) {
    return res.status(400).send({ message: 'Cannot set a past date for event' });
  }

  if (req.body.time === undefined) {
    return res.status(400).send({ message: "Time is required " });
  }

  if (req.body.centerId === undefined) {
    return res.status(400).send({ message: "CenterId is required" });
  }

  if (req.body.title.toString().trim() === "") {
    errors.push("Title is required");
  }

  if (req.body.description.toString().trim() === "") {
    errors.push("Description is required");
  }

  if (req.body.startDate.toString().trim() === "") {
    errors.push("Start Date is required");
  }

  if (req.body.endDate.toString().trim() === "") {
    errors.push("End Date is required");
  }

  if (req.body.time.toString().trim() === "") {
    errors.push("Time is required");
  }

  if (req.body.centerId.toString().trim() === "") {
    errors.push("Center is required");
  }

  if (errors.length > 0) {
    return res.status(400).send({ message: errors });
  }

  return next();
};

export default eventValidation;
