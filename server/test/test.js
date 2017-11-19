import chai from 'chai';
import app from '../server.js';

chai.use(require('chai-http'));

const expect = chai.expect;

describe('API endpoints /api/v1/users', () => {
  before(() => {

  });

  after(() => {

  });

  // GET - index
  it('sho', () => chai.request(app)
    .get('/api/v1')
    .then((res) => {
      expect(res).to.have.status(200);
      //expect(res).to.be.json;
      // expect(res.body).to.have.property('title');
    }));
});
