import Model from '../models';
import jwt from 'jsonwebtoken';

const Event = Model.Event;

class EventController {
  static createEvent(req, res) {
    Event.findOne({
      where: {
      	centerId: req.body.centerId,
      	date: new Date(req.body.date).toISOString(),
      },
    })
      .then((existingEvent) => {
        	if (existingEvent) {
        		return res.status(409).send({
            status: 'Fail',
            message: 'Center has been booked for this date',
            data: {
                   		id: existingEvent.id,
                   		title: existingEvent.title,
                   		centerId: existingEvent.centerId,
            },
          });
        	}

        Event.create({
			  title: req.body.title,
			  description: req.body.description,
			  venue: req.body.venue,
			  date: new Date(req.body.date).toISOString(),
			  time: req.body.time,
			  userId: req.userId,
			  centerId: req.body.centerId,
        }).then((event) => {
          res.status(200).send({
			       status: 'Success',
				   message: 'Center has been created',
				   data: event,
          });
        }).catch((e) => {
          console.log(e);
          res.status(500).send({
            status: 'Error',
            message: 'Error',
          });
        });
      }).catch((e) => {
        console.log(e);
        res.status(500).send({
          status: 'Error',
          message: 'Error',
        });
      });
  }
}

export default EventController;
