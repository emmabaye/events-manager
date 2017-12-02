import Model from '../models';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import moment from 'moment';


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
            message: 'Center has already been booked for this date',
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
   * Get details of an event by Id
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getEvent(req, res) {
    Event.findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).send({ error: 'Event not found' });
        }

         res.status(200).send({
            status: 'Success',
            message: 'Event found',
            data: event,
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
  
  /**
   * Cancel an event by admin
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static cancelEvent(req, res) {
    Event.update({
          venue: "NOT AVAILABLE",
        }, {
          where: {
            id: req.params.eventId,
          },
        }).then((updatedEvent) => {
          if (updatedEvent == [0]) {
            res.status(500).send({
              status: ' Server Error',
              message: 'Cannot update event',
            });
          }

          Event.findOne({ 
            where: {id: req.params.eventId }, 
            include:[Model.User]
          })
            .then((event) => {
              console.log("FOUND");
              console.log(event.User.dataValues.email.toString());
          if (event) {
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
              },
              tls: {
                rejectUnauthorized: false
              }
            });

            let mailOptions = {
              from: 'admin@eventsmanager.com',
              to: event.User.dataValues.email.toString(),
              subject: 'Notification on Cancellation of Event',
              html: `<p>Your event,<b> ${event.title}</b>, holding on <b>${moment(event.date).format('DD MMMM YYYY')} </b>has been \
              cancelled on our platform. This is because\
               the center you chose will not be available. </b></p><br>\
               <p>Contact Admin at <b>admin@eventsmanager.com</b><br>
               Sorry for the incovenience</p>`
            };
            transporter.sendMail(mailOptions, (err, info) => {
              console.log('ERROR: ', err);
              console.log('ENVELOPE: ', info.envelope);
              console.log('MESSAGE ID: ', info.messageId);
            });
          }
        }).catch((err) => {
           res.status(500).send({
              status: ' Server Error',
              message: 'Cannot send mail',
            });
        });
          
          res.status(200).send({
            status: 'Success',
            message: 'Event Updated',
            data: updatedEvent,
          });
    })
  }
}

export default EventController;
