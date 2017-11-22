import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

console.log("ENV ", process.env.NODE_ENV);

let user = {
  firstName: 'userName',
  lastName: 'userSurname',
  email: 'user@user.com',
  password: 'password'
}

let adminToken = "";
let userToken = "";

let event = {
  title: 'Powerful Seminar',
  description: 'Come and See',
  venue: 'City Hall',
  date: new Date('2017-11-21').toISOString(),
  time:'5pm',
  centerId: '1'
};

let center = {
    name: 'City Hall',
    description:'Best Hall for your events',
    location: 'Port Harcourt',
    capacity: "500",
    facilities: "Toilet",
    price:"20 000",
    available: "false"
}; 


chai.use(chaiHttp);

const expect = chai.expect;

describe('API endpoints /api/v1', () => {
  before(() => {

  });

  after(() => {

  });

  // GET - index
  it(
    'Should return http code status 200',
    () => chai.request(app)
      .get('/api/v1')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('title');
        expect(res.body.title).to.equal('Welcome to Events Manager');
      }),
  );



});


// POST - Should create user
describe('API endpoints /api/v1/users', () => {
  it(
    'Should create new user',
    () => chai.request(app)
      .post('/api/v1/users')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.status).to.equal('Success');
      })
      .catch( err => err.response ),
  );


});


describe('API endpoints /api/v1/login', () => {

  // POST - should pass authentication
  it(
    'Should successfully authenticate',
    () => chai.request(app)
      .post('/api/v1/users/login')
      .send({email: 'Admin@Admin.com', password:'password'})
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        adminToken = res.body.data.token;
      }),
  );

});


describe('API endpoints /api/v1/login', () => {

  // POST - should pass authentication
  it(
    'Should successfully authenticate',
    () => chai.request(app)
      .post('/api/v1/users/login')
      .send({email: user.email, password: user.password})
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        userToken = res.body.data.token;
      }),
  );

  // POST - should fail authentication, invalid password
  it(
    'Should return 401, Should fail authentication, invalid password',
    () => chai.request(app)
      .post('/api/v1/users/login')
      .send({email: user.email, password: user.password + 1})
      .then((res) => {
        expect(res).to.have.status(401);
        expect(res).to.be.json;
      })
      .catch( err => err.response ),
  );

});


describe('API endpoints /api/v1/centers', () => {
  
   // - GET all centers
  it(
    'Should get all centers',
    () => chai.request(app)
      .get('/api/v1/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.data).to.be.an('array');
      }),
  );

  // POST - should return 404 -create  a center
  it(
    'Should return 401 create a center',
    () => chai.request(app)
      .post('/api/v1/centers')
      .set('x-access-token', null)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(401);
        expect(res).to.be.json;
      })
      .catch( err => err.response),
  );

    // POST - should return 404 -create  a center
    // User cannot create center
  it(
    'Should return 403 ',
    () => chai.request(app)
      .post('/api/v1/centers')
      .set('x-access-token', userToken)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(403);
        expect(res).to.be.json;
      })
      .catch( err => err.response),
  );

   // POST - should create  a center
  it(
    'Should create a center',
    () => chai.request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        center.id = res.body.data.id;
      }),
  );


   // GET - should get  a center
  it(
    'Should get a center',
    () => chai.request(app)
      .get('/api/v1/centers' + center.id)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        center.id = res.body.data.id;
      })
      .catch( err => err.responses ),
  );




  // PUT - should update  a center
  center.name = center.name + Math.random();
  it(
    'Should update a center',
    () => chai.request(app)
      .put('/api/v1/centers/' + center.id)
      .set('x-access-token', adminToken)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );

it(
    'Should return 404 - center not found',
    () => chai.request(app)
      .put('/api/v1/centers/' + 10000000)
      .set('x-access-token', adminToken)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
      })
      .catch(err => err.response),
  );

});


describe('API endpoints /api/v1/events', () => {
  
  
   // POST - create event
  it(
    'Should create event',
    () => chai.request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .send(event)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        event.id = res.body.data.id;
      })
      .catch( err => err.response ),  
);


// PUT - update event
  event.date = new Date().toISOString()
  it(
    'Should update event',
    () => chai.request(app)
      .put('/api/v1/events/' + event.id)
      .set('x-access-token', adminToken)
      .send(event)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
      .catch( err => err.response ),  
);


  // should return 404
  it(
    'delete event - should return 404',
    () => chai.request(app)
      .delete('/api/v1/events/' + 1000000)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
      })
      .catch( err => err.response ),  
);




  // DELETE - delete event
  it(
    'Should delete event',
    () => chai.request(app)
      .delete('/api/v1/events/' + event.id)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
      .catch( err => err.response ),  
);


it(
    'Should return 404 - event not found',
    () => chai.request(app)
      .delete('/api/v1/centers/' + event.id)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
      })
      .catch(err => err.response),
  );

 

});



describe('API endpoints /api/v1/users/logout', () => {
  before(() => {

  });

  after(() => {

  });

  // GET - log out user
  it(
    'Should log out user',
    () => chai.request(app)
      .get('/api/v1/users/logout')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        }),
  );



});
