import validator from 'validator';

const eventValidation = (req, res, next) => {
  let errors = [];
  if (req.body.title === undefined) {
  	return res.status(400).send({message: "Title is required"});
  }

  if (req.body.description === undefined) {
  	return res.status(400).send({message: "Description is required"});
  }

  if (req.body.venue === undefined) {
  	return res.status(400).send({message: "Venue is required"});
  }

  if (req.body.date === undefined) {
  	return res.status(400).send({message: "date is required"});
  }

  if (req.body.time === undefined) {
  	return res.status(400).send({message: "Time is required "});
  }

  if (req.body.centerId === undefined) {
  	return res.status(400).send({message: "CenterId is required"});
  }

  if(req.body.title.toString().trim() === ""){
  	 errors.push("Title is required");
  }

  if(req.body.description.toString().trim() === "") {
  	 errors.push("Description is required");
  }

  if(req.body.venue.toString().trim() === "") {
  	 errors.push("Venue is required");
  }

  if(req.body.date.toString().trim() === "") {
  	 errors.push("Date is required");
  }

  if((new Date(req.body.date) - Date.now()) < 0) {
  	errors.push('Cannot set a past date for event');
  }

  if(req.body.time.toString().trim() === "") {
  	 errors.push("Time is required");
  }

  if(req.body.centerId.toString().trim() === "") {
  	 errors.push("Center is required");
  }

  if(errors.length > 0) {
  	return res.status(400).send({message: errors});
  }

  return next();

}

export default eventValidation;