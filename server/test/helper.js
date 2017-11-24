let user = {
  firstName: 'userName',
  lastName: 'userSurname',
  email: `user${Math.random()}@user.com`,
  password: 'password',
};

let adminToken = '';
let userToken = '';

let event = {
  title: 'Powerful Seminar',
  description: 'Come and See',
  venue: 'City Hall',
  date: '2018-11-27',
  time: '5pm',
  centerId: '1',
};

let center = {
  name: 'City Hall',
  description: 'Best Hall for your events',
  location: 'Port Harcourt',
  capacity: '500',
  facilities: 'Toilet',
  price: '20 000',
  available: 'false',
};

export default {user, adminToken, userToken, event, center};