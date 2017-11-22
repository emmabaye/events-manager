import Model from '../models';
import jwt from 'jsonwebtoken';

const { Event } = Model;

class EventController {
  /**
   * Create an event
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
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
            message: ' Event created',
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

  /**
   * Update an event
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static updateEvent(req, res) {
    Event.findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).send({ error: 'Event not found' });
        }

        if (req.userId != event.userId) {
          return res.status(400).send({ error: 'You do not have privilege to modify this Event' });
        }

        Event.update({
          title: req.body.title || event.title,
          description: req.body.description || event.description,
          venue: req.body.venue || event.venue,
          date: new Date(req.body.date).toISOString() || event.date,
          time: req.body.time || event.time,
          userId: req.userId || event.userId,
          centerId: req.body.centerId || event.centerId,
        }, {
          where: {
            id: req.params.eventId,
          },
        }).then((updatedEvent) => {
          if (!updatedEvent) {
            res.status(500).send({
              status: ' Server Error',
              message: 'Cannot update event',
            });
          }

          res.status(200).send({
            status: 'Success',
            message: 'Event Updated',
            data: updatedEvent,
          });
        });
      });
  }

  /**
   * Delete an event
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static deleteEvent(req, res) {
    Event.findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).send({ error: 'Event not found' });
        }

        if (req.userId != event.userId) {
          return res.status(400).send({ error: 'You do not have privilege to delete this Event' });
        }

        Event.destroy({
          where: {
            id: req.params.eventId,
          },
        }).then((deletedEvent) => {
          if (!deletedEvent) {
            res.status(500).send({
              status: ' Server Error',
              message: 'Cannot delete event',
            });
          }

          res.status(200).send({
            status: 'Success',
            message: 'Event deleted',
            data: deletedEvent,
          });
        });
      });
  }
}

export default EventController;
