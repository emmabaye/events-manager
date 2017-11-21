import Model from '../models';
import jwt from 'jsonwebtoken';

const Center = Model.Center;

class CenterController {
	static createCenter(req, res) {
      Center.create({
      	name: req.body.name,
      	description: req.body.description,
      	location: req.body.location,
      	capacity: req.body.capacity,
      	facilities: req.body.facilities,
      	price:req.body.price,
      	userId: req.userId
      }).then(center => {
      	res.status(200).send({
      		status: 'Success',
      		message: 'Center has been created',
      		data: center
      	});
      }).catch(e => {
      	res.status(500).send({
      		status: ' Server Error',
      		message: 'Server Error'
      	});
      });
	}
}

export default CenterController;