import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

console.log("ENV ", process.env.NODE_ENV);

let adminToken = "";
let userToken = "";
let event = {
  title: 'Powerful Seminar',
  description: 'Come and See',
  venue: 'City Hall',
  date: new Date('2017-11-21').toISOString(),
  time:'5pm',
  centerId: '1'
}

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


describe('API endpoints /api/v1/users', () => {
  it(
    'Should create new user',
    () => chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'userName',
        lastName: 'userSurname',
        email: 'user' + Math.random() + '@user.com',
        password: 'password'
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
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


describe('API endpoints /api/v1/events', () => {
  
   // GET all centers - should return status 200
  it(
    'Should get all errors',
    () => chai.request(app)
      .get('/api/v1/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.data).to.be.an('array');
      }),
  );

});


describe('API endpoints /api/v1/centers', () => {
  
  /*
   // POST -  get all centers
  it(
    'Should create event',
    () => chai.request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .send(event)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );

  */

});
