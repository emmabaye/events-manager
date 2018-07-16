import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import app from '../server';


let user = {
  firstName: 'userName',
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser1 = {
  firstName: 'userName',
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
  password: 'six',
};

let invalidUser2 = {
  firstName: 'userName',
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
};

let invalidUser3 = {
  firstName: 'userName',
  lastName: 'u',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser4 = {
  firstName: 'userName',
  lastName: '',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser5 = {
  firstName: 'userName',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser6 = {
  firstName: 'f',
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser7 = {
  firstName: '',
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser8 = {
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let invalidUser9 = {
  firstName: 'userName',
  lastName: 'userSurname',
  email: 'invalid email',
  password: 'password',
};

let invalidUser10 = {
  firstName: 'userName',
  lastName: 'userSurname',
  password: 'password',
};


let adminToken = '';
let userToken = '';

let event = {
  title: 'Powerful Seminar',
  description: 'Come and See',
  venue: 'City Hall',
  startDate: '2018-10-27',
  endDate: '2018-10-27',
  time: '5:00PM',
  centerId: '1',
  image: '#noImage'
};

let center = {
  name: 'City Hall',
  description: 'Best Hall for your events',
  location: 'Port Harcourt',
  capacity: '500',
  facilities: 'Toilet',
  price: '20000',
  available: 'true',
  image: '#noImage'
};

chai.use(chaiHttp);

const { expect } = chai;

describe('API endpoints /api/v1', () => {
  before(() => {

  });

  after(() => {

  });

  // GET - index
  it(
    'Should return http code status 200',
    () => request(app)
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
    () => request(app)
      .post('/api/v1/users')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.status).to.equal('Success');
        user.id = res.body.data.user.id;
      })
  );


  // POST - Should create user
  it(
    'Should create new user, Should return 400 for short password',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser1)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for missing password',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser2)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for short lastname',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser3)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );


  // POST - Should create user
  it(
    'Should create new user, Should return 400 for empty lastname',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser4)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for undefine lastname',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser5)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );


  // POST - Should create user
  it(
    'Should create new user, Should return 400 for short firstName',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser6)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for empty firstName',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser7)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for undefined firstName',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser8)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for invalid email',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser9)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - Should create user
  it(
    'Should create new user, Should return 400 for undefined email',
    () => request(app)
      .post('/api/v1/users')
      .send(invalidUser10)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  it(
    'Should get user details',
    () => request(app)
      .get(`/api/v1/users/${user.id}`)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.status).to.equal('Success');
      })
  );
});

describe('API endpoints /api/v1/login', () => {
  // POST - should  return status 400
  it(
    'Should return status 400',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: undefined, password: '' })
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })
  );
});

describe('API endpoints /api/v1/login', () => {
  // POST - should  return status 400
  it(
    'Should return status 400 for undefined password',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: "admin@admin.com" })
      .then((res) => {
        expect(res).to.have.status(400);
      })
  );
});

describe('API endpoints /api/v1/login', () => {
  // POST - should  return status 400
  it(
    'Should return status 400',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: '', password: '' })
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })
  );
});

describe('API endpoints /api/v1/login', () => {
  // POST - should  return status 400
  it(
    'Should return status 400',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: 'admin@admin.com', password: '' })
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })
  );
});


describe('API endpoints /api/v1/login', () => {
  // POST - should pass authentication
  it(
    'Should successfully authenticate',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: 'admin@admin.com', password: 'password' })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        adminToken = res.body.data.token;
        event.userId = res.body.data.user.id;
      })
  );
});


describe('API endpoints /api/v1/login', () => {
  // POST - should pass authentication
  it(
    'Should successfully authenticate',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: user.email, password: user.password })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        userToken = res.body.data.token;
      }),
  );

  // POST - should update user details
  it(
    'Should update user details',
    () => request(app)
      .put(`/api/v1/users/${user.id}`)
      .set('x-access-token', userToken)
      .send({ firstName: 'John' })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('array');
      }),

  );

  // POST - update user details
  it(
    'Should return 403, Should update user details',
    () => request(app)
      .put(`/api/v1/users/${user.id}`)
      .set('x-access-token', userToken)
      .send({ role: 'admin' })
      .then((res) => {
        expect(res).to.have.status(403);
      }),

  );

  // POST - should fail authentication, invalid password
  it(
    'Should return 401, Should fail authentication, invalid password',
    () => request(app)
      .post('/api/v1/users/login')
      .send({ email: user.email, password: user.password + 1 })
      .then((res) => {
        expect(res).to.have.status(401);
        expect(res).to.be.json;
      })

  );
});


describe('API endpoints /api/v1/centers', () => {
  // - GET all centers
  it(
    'Should get all centers',
    () => request(app)
      .get('/api/v1/centers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.data.rows).to.be.an('array');
      }),
  );

  // POST - should return 404 -create  a center
  it(
    'Should return 401 create a center',
    () => request(app)
      .post('/api/v1/centers')
      .set('x-access-token', null)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(401);
        expect(res).to.be.json;
      })
  );

  // POST - should return 404 -create  a center
  // User cannot create center
  it(
    'Should return 403 ',
    () => request(app)
      .post('/api/v1/centers')
      .set('x-access-token', userToken)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(403);
        expect(res).to.be.json;
      })
  );

  // POST - should create  a center
  it(
    'Should create a center',
    () => request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .field('name', center.name)
      .field('description', center.description)
      .field('location', center.location)
      .field('capacity', center.capacity)
      .field('facilities', center.facilities)
      .field('price', center.price)
      .field('available', center.available)
      .field('image', center.image)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        center.id = res.body.data.id;
        event.centerId = res.body.data.id;
      }),
  );

  // POST - should create  a center, should return 400
  it(
    'Should create a center - should return 400, description missing',
    () => request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .field('name', center.name)
      .field('location', center.location)
      .field('capacity', center.capacity)
      .field('facilities', center.facilities)
      .field('price', center.price)
      .field('available', center.available)
      .field('image', center.image)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // POST - should create  a center, should return 400
  it(
    'Should create a center - should return 400',
    () => request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .field('name', "")
      .field('description', "")
      .field('location', "")
      .field('capacity', "")
      .field('facilities', "")
      .field('price', center.price)
      .field('available', "")
      .field('image', center.image)
      .then((res) => {
        expect(res).to.have.status(400);
      }),
  );

  // GET - should get  a center
  it(
    'Should get a center',
    () => request(app)
      .get(`/api/v1/centers/${center.id}`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        center.id = res.body.data.id;
      })
  );


  // PUT - should update  a center
  it(
    'Should update a center',
    () => request(app)
      .put(`/api/v1/centers/${center.id}`)
      .set('x-access-token', adminToken)
      .field('name', center.name)
      .field('description', center.description)
      .field('location', center.location)
      .field('capacity', center.capacity)
      .field('facilities', center.facilities)
      .field('price', center.price)
      .field('available', center.available)
      .field('image', center.image)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
  );


  it(
    'Should return 404 - center not found',
    () => request(app)
      .put(`/api/v1/centers/${10000000}`)
      .set('x-access-token', adminToken)
      .send(center)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
      })
  );
});


describe('API endpoints /api/v1/events', () => {
  // POST - create event
  it(
    'Should create event',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        event.id = res.body.data.id;
      })

  );

  // POST - get events for a specific user
  it(
    'Should get events for a user',
    () => request(app)
      .get(`/api/v1/events/user?page=1`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.rows).to.be.an('array');
        expect(res).to.be.json;
      })

  );


  // POST - get events for a specific center
  it(
    'Should get events for a center',
    () => request(app)
      .get(`/api/v1/events/centers/${center.id}/?page=1`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.rows).to.be.an('array');
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event, should return 400 for undefined title',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
      })

  );

  // POST - create event
  it(
    'Should create event, should return 400 for undefined startDate',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
      })

  );

  // POST - create event
  it(
    'Should create event, should return 400 for undefined endDate',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', "")
      .field('venue', event.venue)
      .field('description', "")
      .field('startDate', "")
      .field('endDate', "")
      .field('time', "")
      .field('centerId', "")
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );

  // POST - create event
  it(
    'Should create event - return 400',
    () => request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', "")
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(400);
        expect(res).to.be.json;
      })

  );



  // PUT - update event
  it(
    'Should update event',
    () => request(app)
      .put(`/api/v1/events/${event.id}`)
      .set('x-access-token', adminToken)
      .field('title', event.title)
      .field('venue', event.venue)
      .field('description', event.description)
      .field('startDate', event.startDate)
      .field('endDate', event.endDate)
      .field('time', event.time)
      .field('centerId', event.centerId)
      .field('image', event.image)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
  );


  // PUT - cancel event
  it(
    'Should cancel event',
    () => request(app)
      .put(`/api/v1/events/${event.id}/cancel`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
  );


  // should return 404
  it(
    'delete event - should return 404',
    () => request(app)
      .delete(`/api/v1/events/${1000000}`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
      })
  );


  // DELETE - delete event
  it(
    'Should delete event',
    () => request(app)
      .delete(`/api/v1/events/${event.id}`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })

  );

  it(
    'Should return 404 - event not found',
    () => request(app)
      .delete(`/api/v1/events/${event.id}`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
      })
  );
});

describe('API endpoint api/v1/centers', () => {
  // DELETE - delete center
  it(
    'Should delete center, should return 403 for no admin privilege',
    () => request(app)
      .delete(`/api/v1/centers/${center.id}`)
      .set('x-access-token', userToken)
      .then((res) => {
        expect(res).to.have.status(403);
      })
  );
});

describe('API endpoint api/v1/centers', () => {
  // DELETE - delete center
  it(
    'Should delete center',
    () => request(app)
      .delete(`/api/v1/centers/${center.id}`)
      .set('x-access-token', adminToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
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
    () => request(app)
      .get('/api/v1/users/logout')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }),
  );
});
