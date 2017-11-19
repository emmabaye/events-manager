const routes = (app) => {
  /*
	 *GET API index route
	 */
  app.route('/api/v1')
	  .get((req, res) => res.send({ title: 'Welcome to Events Manager' }));
};

export default routes;
