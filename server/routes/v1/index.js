import UserController from '../../controllers/user-controller.js';
import CenterController from '../../controllers/center-controller.js';
import EventController from '../../controllers/event-controller.js';

const routes = (app) => {
  /*
	*GET API index route
   */
  app.route('/api/v1')
	  .get((req, res) => res.send({ title: 'Welcome to Events Manager' }));

  app.route('/api/v1/users')
    .post(UserController.signUp);

  app.route('/api/v1/users/login')
  	 .post(UserController.signIn);

  app.route('/api/v1/users/logout')
    .get(UserController.signOut);

  app.route('/api/v1/events')
    .post(UserController.isAuthenticated, EventController.createEvent);

   app.route('/api/v1/centers')
     .get(CenterController.getAllCenters)
     .post(UserController.isAuthenticated,UserController.isAdmin,CenterController.createCenter);

   app.route('/api/v1/centers/:centerId')
     .get(CenterController.getCenter);

};

export default routes;
