const centerValidation = (req, res, next) => {
  let errors = [];
  let fields = ['Name', 'Description','Location', 'Capacity', 'Facilities', 'Price'];

for( let i = 0; i<fields.length; i++) {
	if(req.body[fields[i].toLowerCase()] == undefined){
		return res.status(400).send({message: fields[i] + " is required"});
	}
}

for( let i = 0; i<fields.length; i++) {
	if(req.body[fields[i].toLowerCase()].toString().trim() === ""){
		errors.push(fields[i] + " is required");
	}
}
  
  if(errors.length > 0) {
  	return res.status(400).send({message: errors});
  }

  return next();

}

export default centerValidation;