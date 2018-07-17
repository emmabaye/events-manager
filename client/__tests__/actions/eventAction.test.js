import { addEvent, deleteEvent, getUserEvents, getEvent } from '../../actions/eventAction';

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


describe('delete event action', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('creates DELETE_EVENT_FULFILLED when adding an event', () => {
    axiosMock.reset();
    axiosMock.onAny('/api/v1/events/1', fulfilledResponse).reply(200, { data: "1" });

    const expectedActions = [
      { type: 'DELETE_EVENT' },
      { type: 'DELETE_EVENT_FULFILLED', payload: { data: "1" }, eventId: 1 }
    ];

    const store = mockStore({});

    return store.dispatch(deleteEvent(1)).then(() => { //eslint-disable-line max-nested-callbacks
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('event actions', () => {
  describe('add  event action', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates ADD_EVENT_FULFILLED when adding an event', () => {
      axiosMock.onPost('/api/v1/events', eventDetails).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'ADD_EVENT' },
        { type: 'ADD_EVENT_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(addEvent(eventDetails)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates DELETE_EVENT_REJECTED when deleting an event', () => {
      axiosMock.onAny('/api/v1/events/1', {}).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'DELETE_EVENT' },
        { type: 'DELETE_EVENT_REJECTED' }
      ];

      const store = mockStore({});

      return store.dispatch(deleteEvent("1")).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });


    it('creates DELETE_EVENT_REJECTED when deleting an event and no eventId is provided', () => {
      axiosMock.onAny('/api/v1/events', {}).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'DELETE_EVENT' },
        { type: 'DELETE_EVENT_REJECTED' }
      ];

      const store = mockStore({});

      return store.dispatch(deleteEvent()).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });


    it('creates GET_USER_EVENTS_FULFILLED when adding an event', () => {
      axiosMock.onGet('/api/v1/events/user?page=1').reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'GET_USER_EVENTS' },
        { type: 'GET_USER_EVENTS_FULFILLED', payload: { data: {} } }
      ];

      const store = mockStore({});

      return store.dispatch(getUserEvents(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates GET_USER_EVENTS_FULFILLED when adding an event', () => {
      axiosMock.onGet('/api/v1/events/user?page=1').networkError();

      const expectedErrorActions = [
        { type: 'GET_USER_EVENTS' },
        { type: 'GET_USER_EVENTS_REJECTED', payload: new Error("Network Error") }
      ];


      const store = mockStore({});

      return store.dispatch(getUserEvents(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedErrorActions);
      });
    });

    it('creates GET_EVENT_FULFILLED when adding an event', () => {
      axiosMock.onGet('/api/v1/events/1').reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'GET_EVENT' },
        { type: 'GET_EVENT_FULFILLED', payload: { data: {} } }
      ];


      const store = mockStore({});

      return store.dispatch(getEvent(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
