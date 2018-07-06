import nodemailer from 'nodemailer';
import moment from 'moment';
import Sequelize from 'sequelize';
import cloudinary from '../config/cloudinary';
import Model from '../models';
import page from '../utils/page';

const { Event } = Model;
const { Op } = Sequelize;


/**
   * Event controller
   * date: new Date(req.body.date).toISOString()
   */
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
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [req.body.startDate, req.body.endDate]
            }
          },
          {
            endDate: {
              [Op.between]: [req.body.startDate, req.body.endDate]
            }
          }
        ]
      }
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
              startDate: existingEvent.startDate,
              endDate: existingEvent.endDate
            }
          });
        }

        // Cloudinary below this line
        cloudinary.v2.uploader.upload_stream({
          resource_type: 'raw'
        }, (error, result) => {
          if (error) {
            console.log('IMAGE ERROR ', error);
          }

          Event.create({
            title: req.body.title,
            description: req.body.description,
            venue: req.body.venue,
            startDate: new Date(req.body.startDate).toISOString(),
            endDate: new Date(req.body.endDate).toISOString(),
            time: req.body.time,
            userId: req.userId,
            centerId: req.body.centerId,
            image: (result) ? result.url : '#noImage'
          }).then((event) => res.status(200).send({
            status: 'Success',
            message: ' Event created',
            data: event
          })).catch((e) => res.status(500).send({
            status: 'Error',
            message: 'Server Error'
          }));
        })
          .end((req.files.image) ? req.files.image.data : undefined);
        // Cloudinary covers above this
      }).catch((e) => res.status(500).send({
        status: 'Error',
        message: 'There seems to be an error.'
      }));
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
          return res.status(404).send({ status: 'Error', message: 'Event not found' });
        }

        if (req.userId !== event.userId) {
          return res.status(403).send({ status: 'Error', message: 'You do not have privilege to modify this Event' });
        }

        // cloudinary below this line
        cloudinary.v2.uploader.upload_stream({
          resource_type: 'raw'
        }, (error, result) => {
          if (error) {
            console.log('IMAGE ERROR ', error);
          }

          console.log("EVENT STATUS ", event.status);
          console.log(" EVENT CENTER ID ", event.centerId);
          console.log("REQ BODY CENTER ID ", req.body.centerId);

          Event.update({
            title: req.body.title || event.title,
            description: req.body.description || event.description,
            venue: req.body.venue || event.venue,
            startDate: new Date(req.body.startDate).toISOString() || event.startDate,
            endDate: new Date(req.body.endDate).toISOString() || event.endDate,
            time: req.body.time || event.time,
            userId: req.userId || event.userId,
            centerId: req.body.centerId || event.centerId,
            image: (result) ? result.url : event.image,
            status: ((event.centerId === null && req.body.centerId !== null) ||
            (event.centerId !== req.body.centerId)) ?
              "holding" : event.status
          }, {
            where: {
              id: req.params.eventId
            }
          }).then((updatedEvent) => {
            if (!updatedEvent) {
              res.status(500).send({
                status: ' Server Error',
                message: 'Cannot update event'
              });
            }

            cloudinary.v2.uploader.destroy(event.image.split('/')[7], {
              resource_type: 'raw'
            });

            res.status(200).send({
              status: 'Success',
              message: 'Event Updated',
              data: updatedEvent
            });
          });
        }).end((req.files.image) ? req.files.image.data : undefined);

        // cloudinary above this line
      });
  }

  /**
   * Get details of an event by Id
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getEvent(req, res) {
    Event.findOne({
      where: { id: req.params.eventId },
      include: [Model.Center]
    })
      .then((event) => {
        if (!event) {
          return res.status(404).send({ status: 'Error', message: 'Event not found' });
        }
        console.log("EVENT ", event);
        res.status(200).send({
          status: 'Success',
          message: 'Event found',
          data: event
        });
      });
  }

  /**
   * Get all events for a specific user
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getUserEvents(req, res) {
    const limit = 9;
    const offset = (req.query.page === undefined || Number.isNaN(req.query.page) || req.query.page < 1) ?
      0 : (req.query.page - 1) * limit;
    Event.findAndCountAll({
      where: { userId: req.userId },
      limit: limit,
      offset: offset,
      order: [['updatedAt', 'DESC']]
    }).then((events) => {
      if (!events) {
        return res.status(404).send({ status: 'Error', message: 'Events not found' });
      }

      events.page = page(offset, limit, events.count);

      res.status(200).send({
        status: 'Success',
        message: 'Events found',
        data: events
      });
    }).catch((e) => {
      res.status(500).send({
        status: 'Error',
        message: 'Server Error',
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
          return res.status(404).send({ status: 'Error', message: 'Event not found' });
        }

        if (req.userId !== event.userId) {
          return res.status(400).send({ status: 'Error', message: 'You do not have privilege to delete this Event' });
        }

        Event.destroy({
          where: {
            id: req.params.eventId
          }
        }).then((deletedEvent) => {
          if (!deletedEvent) {
            res.status(500).send({
              status: ' Server Error',
              message: 'Cannot delete event'
            });
          }

          cloudinary.v2.uploader.destroy(event.image.split('/')[7], {
            resource_type: 'raw'
          }, (err, result) => {

          });

          res.status(200).send({
            status: 'Success',
            message: 'Event deleted',
            data: deletedEvent
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
      status: 'cancelled',
      centerId: null
    }, {
      where: {
        id: req.params.eventId
      }
    }).then((updatedEvent) => {
      if (updatedEvent === [0]) {
        res.status(500).send({
          status: ' Server Error',
          message: 'Cannot update event'
        });
      }

      Event.findOne({
        where: { id: req.params.eventId },
        include: [Model.User]
      })
        .then((event) => {
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
              html: `<p>Your event,<b> ${event.title}</b>, holding on \
              <b>${moment(event.date).format('DD MMMM YYYY')} </b>has been \
              cancelled on our platform. This is because\
               the center you chose will not be available. </b></p><br>\
               <p>Contact Admin at <b>admin@eventsmanager.com</b><br>
               Sorry for the incovenience</p>`
            };
            transporter.sendMail(mailOptions, (err, info) => {
              console.log('ERROR: ', err);
              console.log('ENVELOPE , MESSAGE ID ===>', info.envelope, info.messageId);
            });
          }
        }).catch((err) => {
          res.status(500).send({
            status: ' Server Error',
            message: 'Cannot send mail'
          });
        });

      res.status(200).send({
        status: 'Success',
        message: 'Event Updated',
        data: updatedEvent
      });
    });
  }
}

export default EventController;
