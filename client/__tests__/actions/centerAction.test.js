import {
  addCenter, deleteCenter, getAllCenters, cancelCenterEvent, getCenterEvents,
  setStatus, getCenter, modifyCenter
} from '../../actions/centerAction';

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

existingCenter.get = (id) => '1';

const fulfilledResponse = {
  data: {

  }
};

const fulfilledDeleteResponse = {
  data: "1"
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

      return store.dispatch(addCenter(centerDetails)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('delete center action', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates DELETE_CENTER_FULFILLED when deleting a center', () => {
      axiosMock.onAny('/api/v1/centers/1').reply(200, fulfilledDeleteResponse);

      const expectedActions = [
        { type: 'DELETE_CENTER' },
        { type: 'DELETE_CENTER_FULFILLED', payload: fulfilledDeleteResponse, centerId: 1 }
      ];

      const store = mockStore({});

      return store.dispatch(deleteCenter(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates DELETE_CENTER_REJECTED when deleting a center', () => {
      axiosMock.onAny('/api/v1/centers/1').reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'DELETE_CENTER' },
        { type: 'DELETE_CENTER_REJECTED', res: { data: {} } }
      ];

      const store = mockStore({});

      return store.dispatch(deleteCenter(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('get all centers actions', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates GET_ALL_CENTERS_FULFILLED when getting all centers a center', () => {
      axiosMock.onGet('/api/v1/centers?page=1').reply(200, fulfilledDeleteResponse);

      const expectedActions = [
        { type: 'GET_ALL_CENTERS' },
        { type: 'GET_ALL_CENTERS_FULFILLED', payload: fulfilledDeleteResponse, }
      ];

      const store = mockStore({});

      return store.dispatch(getAllCenters(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('cancel centers action', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates CANCEL_CENTER_EVENTS_FULFILLED when cancelling an event for a center', () => {
      axiosMock.onAny('/api/v1/events/1/cancel').reply(200, fulfilledDeleteResponse);

      const expectedActions = [
        { type: 'CANCEL_CENTER_EVENT' },
        { type: 'CANCEL_CENTER_EVENT_FULFILLED', payload: { data: "1" }, eventId: 1 }
      ];

      const store = mockStore({});

      return store.dispatch(cancelCenterEvent(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates CANCEL_CENTER_EVENTS_FULFILLED when cancelling an event for a center', () => {
      axiosMock.onAny('/api/v1/events/1/cancel').networkError();

      let error = new Error("Network Error");

      const expectedActions = [
        { type: 'CANCEL_CENTER_EVENT' },
        { type: 'CANCEL_CENTER_EVENT_REJECTED', payload: error }
      ];

      const store = mockStore({});

      return store.dispatch(cancelCenterEvent(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates CANCEL_CENTER_EVENT_REJECTED when cancelling a center', () => {
      axiosMock.onAny('/api/v1/events/1/cancel').reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'CANCEL_CENTER_EVENT' },
        { type: 'CANCEL_CENTER_EVENT_REJECTED', res: { data: {} } }
      ];

      const store = mockStore({});

      return store.dispatch(cancelCenterEvent(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('get a center', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates GET_CENTER_FULFILLED when getting a center', () => {
      axiosMock.onGet('/api/v1/centers/1').reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'GET_CENTER' },
        { type: 'GET_CENTER_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(getCenter(1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('get center events', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates GET_CENTER_EVENTS_FULFILLED when getting all centers a center', () => {
      axiosMock.onGet('/api/v1/events/centers/1?page=1').reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'GET_CENTER_EVENTS' },
        { type: 'GET_CENTER_EVENTS_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(getCenterEvents(1, 1)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('modify a center', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates MODIFY_CENTER_FULFILLED when modifying a center', () => {
      axiosMock.onAny('/api/v1/centers/1').reply(200, fulfilledResponse);

      const centerForm = {
        get: (str) => 1
      };

      const expectedActions = [
        { type: 'MODIFY_CENTER' },
        { type: 'MODIFY_CENTER_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(modifyCenter(centerForm)).then(() => { //eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('set status', () => {
    it(' it should set status', () => {
      const expectedActions = [
        { type: 'SET_STATUS', payload: "success" },
      ];

      const store = mockStore({});
      store.dispatch(setStatus("success"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
