import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { getAllCenters, addCenter, getCenter, modifyCenter } from '../actions/centerAction';

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const centerDetails = {
  name: 'City Hall',
  description: 'Best Hall for your events',
  location: 'Port Harcourt',
  capacity: '500',
  facilities: 'Toilet',
  price: '20000',
  available: 'true',
  image: '#noImage',
};

const existingCenter = {
  id: '1',
  name: 'City Hall',
  description: 'Best Hall for your events',
  location: 'Port Harcourt',
  capacity: '500',
  facilities: 'Toilet',
  price: '20000',
  available: 'true',
  image: '#noImage',
};

existingCenter.get = (id) => {
  return '1';
}

let centerForm = existingCenter;

const fulfilledResponse = {
  data: {
  }
};

global.localStorage = {
  getItem: (key) => key
};


describe('center actions', () => {

  describe('add  center action', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates ADD_CENTER_FULFILLED when adding a center', () => {
      axiosMock.onPost('/api/v1/centers', centerDetails).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'ADD_CENTER' },
        { type: 'ADD_CENTER_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(addCenter(centerDetails)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

});
