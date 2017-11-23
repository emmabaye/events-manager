import UserController from '../../controllers/user-controller';
import CenterController from '../../controllers/center-controller';
import EventController from '../../controllers/event-controller';

const routes = (app) => {
  app.route('/api/v1')
    .get((req, res) => res.send({ title: 'Welcome to Events Manager' }));

  app.route('/api/v1/users')
    .post(UserController.signUp);

  app.route('/api/v1/users/login')
    .post(UserController.signIn);

  app.route('/api/v1/users/logout')
    .get(UserController.signOut);

  app.route('/api/v1/users/:userId')
    .get(UserController.getUser)
    .put(UserController.isAuthenticated, UserController.updateUser);

  app.route('/api/v1/events')
    .post(UserController.isAuthenticated, EventController.createEvent);

  app.route('/api/v1/events/:eventId')
    .get(EventController.getEvent)
    .put(UserController.isAuthenticated, EventController.updateEvent)
    .delete(UserController.isAuthenticated, EventController.deleteEvent);

  app.route('/api/v1/centers')
    .get(CenterController.getAllCenters)
    .post(UserController.isAuthenticated, UserController.isAdmin, CenterController.createCenter);

  app.route('/api/v1/centers/:centerId')
    .get(CenterController.getCenter)
    .put(UserController.isAuthenticated, UserController.isAdmin, CenterController.updateCenter);

  app.all('*', (req, res) => res.status(404).send({
    status: 'Error',
    message: 'Resource not found',
  }));
};

export default routes;
