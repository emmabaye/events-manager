import dotenv from 'dotenv';

dotenv.config();

let generateFutureDate = (presentYear) => {
	let year = Math.ceil(Math.random() * (5138 - presentYear) + presentYear);
	let month = Math.ceil(Math.random() * (12 - 1) + 1);
	let day = Math.ceil(Math.random() * (28 - 1) + 1);

	return `${day}-${month}-${year}`;
}

export default {
  env: process.env,
  event: {
  	title: `Seminar ${Math.random().toString().substr(-5)}`,
    description: 'Lorem Ipsum Seminar Description',
    center: 'City Hall',
    date: generateFutureDate(2018),
    time: '17:00',
    image: '#noImage',
    centerId: '1'
  },
  center: {
  	name: 'City Hall',
    description: 'Best Hall for your events',
    location: 'Port Harcourt',
    capacity: '500',
    facilities: 'Toilet',
    price: '20000',
    available: 'true',
    image: '#noImage'
  }
};
