import { UserController, CenterController, EventController } from '../../controllers';
import { isAdmin, isAuthenticated, userValidation, centerValidation, eventValidation } from '../../middlewares';

const routes = (app) => {
  app.route('/api/v1')
    .get((req, res) => res.send({ title: 'Welcome to Events Manager' }));

  app.route('/api/v1/users')
    .post(userValidation.signUp, UserController.signUp);

  app.route('/api/v1/users/login')
    .post(userValidation.signIn, UserController.signIn);

  app.route('/api/v1/users/logout')
    .get(UserController.signOut);

  app.route('/api/v1/users/:userId')
    .get(UserController.getUser)
    .put(isAuthenticated, UserController.updateUser);

  app.route('/api/v1/events')
    .post(isAuthenticated, eventValidation, EventController.createEvent);

  app.route('/api/v1/events/:eventId')
    .get(EventController.getEvent)
    .put(isAuthenticated, EventController.updateEvent)
    .delete(isAuthenticated, EventController.deleteEvent);

  app.route('/api/v1/centers')
    .get(CenterController.getAllCenters)
    .post(isAuthenticated, isAdmin,centerValidation, CenterController.createCenter);

  app.route('/api/v1/centers/:centerId')
    .get(CenterController.getCenter)
    .put(isAuthenticated, isAdmin, CenterController.updateCenter);

  app.all('*', (req, res) => res.status(404).send({
    status: 'Error',
    message: 'Resource not found',
  }));
};

export default routes;
