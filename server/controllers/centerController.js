import cloudinary from 'cloudinary';
import Model from '../models';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const { Center } = Model;


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
      Center.create({
        name: req.body.name,
        description: req.body.description.trim(),
        location: req.body.location.trim(),
        capacity: req.body.capacity.trim(),
        facilities: req.body.facilities.trim(),
        price: req.body.price.trim(),
        userId: req.userId,
        image: (result) ? result.url : '#noImage'
      }).then((center) => {
        return res.status(200).send({
          status: 'Success',
          message: 'Center has been created',
          data: center,
        });
      }).catch((e) => {
        console.log("ERROR I CREATING CENTER",e);
        return res.status(500).send({
          status: 'Error',
          message: 'Server Error',
        });
      });
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
            status: ' Server Error',
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
   * Get all centers
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getAllCenters(req, res) {
    Center.findAll({})
      .then((centers) => {
        if (!centers) {
          res.status(404).send({
            status: ' Server Error',
            message: 'Centers not found',
          });
        }
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
          return res.status(404).send({ error: 'Center not found' });
        }

        if (req.userId != center.userId) {
          return res.status(400).send({ error: 'You do not have privilege to modify this Center' });
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
                status: ' Server Error',
                message: 'Centers not update center',
              });
            }

            return res.status(200).send({
              status: 'Success',
              message: 'Center Updated',
              data: updatedCenter,
            });
          });
        }).end((req.files.image) ? req.files.image.data : undefined);
      });
  }
}

export default CenterController;
