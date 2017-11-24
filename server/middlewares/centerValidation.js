const centerValidation = (req, res, next) => {
  let errors = [];
  if (req.body.name === undefined) {
  	return res.status(400).send({error: "Name is required"});
  }

  if (req.body.description === undefined) {
  	return res.status(400).send({error: "Description is required"});
  }

  if (req.body.location === undefined) {
  	return res.status(400).send({error: "Location is required"});
  }

  if (req.body.capacity === undefined) {
  	return res.status(400).send({error: "Capacity is required"});
  }

  if (req.body.facilities === undefined) {
  	return res.status(400).send({error: "Facilities is required "});
  }

  if (req.body.price === undefined) {
  	return res.status(400).send({error: "Price is required"});
  }

  if(req.body.description.toString().trim() === ""){
  	 errors.push("Description is required");
  }

  if(req.body.location.toString().trim() === ""){
  	 errors.push("Location is required");
  }

  if(req.body.capacity.toString().trim() === ""){
  	 errors.push("Capacity is required");
  }

  if(req.body.facilities.toString().trim() === "") {
  	 errors.push("Facilities is required");
  }

  if(req.body.price.toString().trim() === ""){
  	 errors.push("Price is required");
  }

  if(errors.length > 0) {
  	return res.status(400).send({errors: errors});
  }

  return next();

}

export default centerValidation;