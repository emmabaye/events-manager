import dotenv from 'dotenv';

dotenv.config();

export default {
  env: process.env,
  event: {
  	title: `Tech Meetup ${Math.random().toString().substr(-5)}`, //eslint-disable-line
    description: 'Lorem Ipsum Seminar Description',
    center: 'City Event Center',
    startDate: "16-12-2019",
    endDate: "17-12-2019",
    time: '5:00PM',
    image: '#noImage',
    centerId: '1'
  },
  center: {
  	name: 'Moments Event Center', //eslint-disable-line
    description: 'Best Hall for your events',
    location: 'Port Harcourt',
    capacity: '500',
    facilities: 'Toilet',
    price: '20000',
    available: 'Center is Available',
    image: '#noImage'
  }
};
