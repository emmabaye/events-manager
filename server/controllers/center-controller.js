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
      		status: 'Error',
      		message: 'Server Error'
      	});
      });
	}


    static getCenter(req, res) {
      Center.findOne({ where: { id: req.params.centerId }, include: [Model.Event]})
        .then(center => {
        	if(!center){
        		res.status(404).send({
      		    status: ' Server Error',
      		    message: 'Center not found'
      	      })
        	}
        	res.status(200).send({
      		  status: 'Success',
      		  message: 'Center found',
      		  data: center
         	});

        }).catch(e => {console.log(e)
      	res.status(500).send({
      		status: 'Error',
      		message: 'Server Error'
      	});
      });
    }


    static getAllCenters(req, res) {
      Center.findAll({})
      	.then(centers => {
        	if(!centers){
        		res.status(404).send({
      		    status: ' Server Error',
      		    message: 'Centers not found'
      	      })
        	}
        	res.status(200).send({
      		  status: 'Success',
      		  message: 'Centers found',
      		  data: centers
         	});

        }).catch(e => {
      	res.status(500).send({
      		status: 'Error',
      		message: 'Server Error'
      	});
      });
    }
}

export default CenterController;