import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

console.log("ENV ", process.env.NODE_ENV);

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


describe('API endpoints /api/v1/', () => {


  it(
    'Should create new user',
    () => chai.request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'AdminName',
        lastName: 'AdminSurname',
        email: 'user' + Math.random() + '@user.com',
        password: 'password'
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );


  // POST - should pass authentication
  it(
    'Should pass authentication',
    () => chai.request(app)
      .post('/api/v1/users/login')
      .send({email: 'Admin@Admin.com', password:'password'})
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );

  it(
    'Should sign out, return status 200',
    () => chai.request(app)
        .get('/api/v1/users/logout')
        .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );

  // POST - should return status 200
  it(
    'Should return status 200',
    () => chai.request(app)
      .get('/api/v1/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );

   // POST - should return status 200
  it(
    'Should return status 200',
    () => chai.request(app)
      .get('/api/v1/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );


  


 

});
