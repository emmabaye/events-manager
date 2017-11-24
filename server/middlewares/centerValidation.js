const centerValidation = (req, res, next) => {
  let errors = [];
  let fields = ['name', 'description','location', 'capacity', 'facilities', 'price'];

for( let i = 0; i<fields.length; i++) {
	if(req.body[fields[i]] == undefined){
		return res.status(400).send({error: req.body[fields[i]] + "is required"});
	}
}

for( let i = 0; i<fields.length; i++) {
	if(req.body[fields[i]].toString().trim() === ""){
		errors.push(req.body[fields[i]] + "is required");
	}
}
  
  if(errors.length > 0) {
  	return res.status(400).send({errors: errors});
  }

  return next();

}

export default centerValidation;