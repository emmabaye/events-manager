import cloudinary from '../config/cloudinary';
import Model from '../models';
import page from '../utils/page';

const { Center } = Model;
const { Event } = Model;

/** Class Center Controller functions. */
class CenterController {
  /**
   * Create a new center
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static createCenter(req, res) {
    cloudinary.v2.uploader.upload_stream({
      resource_type: 'raw'
    }, (error, result) => {
      if (error) {
        console.log('IMAGE ERROR ', error);
      }
      return Center.create({
        name: req.body.name,
        description: req.body.description.trim(),
        location: req.body.location.trim(),
        capacity: req.body.capacity.trim(),
        facilities: req.body.facilities.trim(),
        price: req.body.price.trim(),
        userId: req.userId,
        image: (result) ? result.url : '#noImage'
      }).then((center) => res.status(200).send({
        status: 'Success',
        message: 'Center has been created',
        data: center,
      })).catch((e) => res.status(500).send({
        status: 'Error',
        message: 'There was an error in adding center pls try again',
      }));
    })
      .end((req.files.image) ? req.files.image.data : undefined);
  }

  /**
   * Get the details of a center
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getCenter(req, res) {
    Center.findOne({ where: { id: req.params.centerId }, include: [Model.Event] })
      .then((center) => {
        if (!center) {
          res.status(404).send({
            status: 'Error',
            message: 'Center not found',
          });
        }
        res.status(200).send({
          status: 'Success',
          message: 'Center found',
          data: center,
        });
      }).catch((e) => {
        console.log(e);
        res.status(500).send({
          status: 'Error',
          message: 'Server Error',
        });
      });
  }

  /**
   * Get events for a center
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getCenterEvents(req, res) {
    const limit = 9;
    const offset = (req.query.page === undefined || Number.isNaN(req.query.page) || req.query.page < 1) ?
      0 : (req.query.page - 1) * limit;
    Event.findAndCountAll({
      where: { centerId: req.params.centerId },
      limit: limit,
      offset: offset
    })
      .then((events) => {
        if (!events) {
          res.status(404).send({
            status: 'Error',
            message: ' Events not found',
          });
        }

        events.page = page(offset, limit, events.count);

        res.status(200).send({
          status: 'Success',
          message: 'Events found',
          data: events,
        });
      }).catch((e) => {
        res.status(500).send({
          status: 'Error',
          message: 'Server Error',
        });
      });
  }

  /**
   * Get all centers
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getAllCenters(req, res) {
    let options;
    let limit;
    let offset;
    if (req.query.page === "all") {
      options = {
        order: [['updatedAt', 'DESC']]
      };
    } else {
      limit = 9;
      offset = (req.query.page === undefined || Number.isNaN(req.query.page) || req.query.page < 1) ?
        0 : (req.query.page - 1) * limit;
      options = {
        limit: 9,
        offset: offset,
        order: [['updatedAt', 'DESC']]
      };
    }
    console.log("OPTIONS ", options);
    Center.findAndCountAll(options)
      .then((centers) => {
        if (!centers) {
          res.status(404).send({
            status: ' Server Error',
            message: 'Centers not found',
          });
        }
        centers.page = page(offset, limit, centers.count);

        res.status(200).send({
          status: 'Success',
          message: 'Centers found',
          data: centers,
        });
      }).catch((e) => {
        res.status(500).send({
          status: 'Error',
          message: 'Server Error',
        });
      });
  }


  /**
   * Update center details
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static updateCenter(req, res) {
    Center.findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res.status(404).send({ status: 'Error', message: 'Center not found' });
        }

        if (req.userId !== center.userId) {
          return res.status(403).send({ status: 'Error', messsage: 'You do not have privilege to modify this Center' });
        }

        cloudinary.v2.uploader.upload_stream({
          resource_type: 'raw'
        }, (error, result) => {
          if (error) {
            console.log('IMAGE ERROR ', error);
          }

          Center.update({
            name: req.body.name || center.name,
            description: req.body.description || center.description,
            location: req.body.location || center.location,
            capacity: req.body.capacity || center.capacity,
            facilities: req.body.facilities || center.facilities,
            price: req.body.price || center.price,
            available: req.body.available || center.available,
            userId: req.userId,
            image: (result) ? result.url : center.image
          }, {
            where: {
              id: req.params.centerId,
            },
          }).then((updatedCenter) => {
            if (!updatedCenter) {
              return res.status(500).send({
                status: 'Error',
                message: 'Cannot update center due to server error',
              });
            }

            cloudinary.v2.uploader.destroy(center.image.split('/')[7], {
              resource_type: 'raw'
            });

            return res.status(200).send({
              status: 'Success',
              message: 'Center Updated',
              data: updatedCenter,
            });
          });
        }).end((req.files.image) ? req.files.image.data : undefined);
      });
  }

  /**
   * Delete a center
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static deleteCenter(req, res) {
    Center.findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res.status(404).send({ status: 'Error', message: 'Center not found' });
        }

        if (req.userRole !== 'admin') {
          return res.status(403).send({ status: 'Error', message: 'You do not have privilege to delete this center' });
        }

        Center.destroy({
          where: {
            id: req.params.centerId
          }
        }).then((deleteStatus) => {
          if (!deleteStatus) {
            res.status(500).send({
              status: 'Error',
              message: 'Cannot delete center'
            });
          }

          cloudinary.v2.uploader.destroy(center.image.split('/')[7], {
            resource_type: 'raw'
          }, (err, result) => {

          });

          return res.status(200).send({
            status: 'Success',
            message: 'Center has been deleted',
            data: deleteStatus
          });
        }).catch((e) => res.status(500).send({
          status: 'Error',
          message: 'There was an error in deleting the center. Please try again later.'
        }));
      });
  }
}

export default CenterController;
