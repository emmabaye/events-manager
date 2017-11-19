import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

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
