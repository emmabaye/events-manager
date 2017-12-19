import { UserController, CenterController, EventController } from '../../controllers';
import { isAdmin, isAuthenticated, userValidation, centerValidation, eventValidation } from '../../middlewares';
import path from 'path';

/**
   * Create a new center
   *
   * @param {object} app. An instance of express
   */
const routes = (app) => {

  /**
   * API index route
   * 
   * @param {string} string, The route of the index.
   * @returns {object} res.
   */
  app.route('/api/v1')
    .get((req, res) => res.send({ title: 'Welcome to Events Manager' }));

  /**
   * Signup route
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/users')
    .post(userValidation.signUp, UserController.signUp);

  /**
   * Login route
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/users/login')
    .post(userValidation.signIn, UserController.signIn);

  /**
   * Logout route
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/users/logout')
    .get(UserController.signOut);
  
  /**
   * GET method, get user details
   * POST method, update user details
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/users/:userId')
    .get(UserController.getUser)
    .put(isAuthenticated, UserController.updateUser);

  /**
   * Create events
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/events')
    .post(isAuthenticated, eventValidation, EventController.createEvent);

  /**
   * GET method, get user details
   * PUT method, update user details
   * DELETE method, delete user details
   * 
   * @param {string} string
   */
  app.route('/api/v1/events/:eventId')
    .get(EventController.getEvent)
    .put(isAuthenticated, eventValidation, EventController.updateEvent)
    .delete(isAuthenticated, EventController.deleteEvent);

    /**
   * PUT method, update user details
   * 
   * @param {string} string
   */
  app.route('/api/v1/events/:eventId/cancel')
    .put(isAuthenticated, isAdmin, EventController.cancelEvent);

  /**
   * GET method, Get all centers
   * POST method, create center
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/centers')
    .get(CenterController.getAllCenters)
    .post(isAuthenticated, isAdmin,centerValidation, CenterController.createCenter);

  /**
   * GET method, get a center details
   * PUT method, update a center details
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.route('/api/v1/centers/:centerId')
    .get(CenterController.getCenter)
    .put(isAuthenticated, isAdmin, centerValidation, CenterController.updateCenter);
  
  /**
   * GET method, get routes for
   * the client SPA
   * 
   * @param {string} string
   * @returns {object} res.
   */
  app.get('*', function (req, res){
    res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html'))
  })

   /**
   * Resource not found
   * @param {string} string
   * @returns {object} res.
   */
  app.all('*', (req, res) => res.status(404).send({
    status: 'Error',
    message: 'Resource not found',
  }));
};

export default routes;
