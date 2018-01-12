import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { addEvent } from '../actions/eventAction';

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const eventDetails = {
  title: 'Powerful Seminar',
  description: 'Come and See',
  venue: 'City Hall',
  date: '2018-10-27',
  time: '5pm',
  centerId: '1',
  image: '#noImage'
};


const fulfilledResponse = {
  data: {
  }
};

global.localStorage = {
  getItem: (key) => key
};


describe('event actions', () => {

  describe('add  event action', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates ADD_EVENT_FULFILLED when adding a center', () => {
      axiosMock.onPost('/api/v1/events', eventDetails).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'ADD_EVENT' },
        { type: 'ADD_EVENT_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(addEvent(eventDetails)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

});
