import Model from '../models';
import jwt from 'jsonwebtoken';

const Center = Model.Center;

class CenterController {
	static createCenter(req, res) {
      Center.create({
      	title: req.body.title,
      	description: req.body.description,
      	location: req.body.location,
      	date:date.req.body.date,
      	time: req.body.time
      }).then(center => {
      	res.status(200).send({
      		status: 'Success',
      		message: 'Center has been created',
      		data: center
      	});
      }).catch(e => {
      	console.log(e);
      	res.status(500).send({
      		status: 'Error',
      		message: 'Error'
      	});
      });
	}
}

export default CenterController;