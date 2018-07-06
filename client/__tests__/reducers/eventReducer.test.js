import reducer from '../../reducers/eventReducer';
import { ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED,
  GET_EVENT, GET_EVENT_FULFILLED, GET_EVENT_REJECTED,
  MODIFY_EVENT, MODIFY_EVENT_FULFILLED, MODIFY_EVENT_REJECTED
} from '../../types/event';


const initState = {};

describe('event reducer', () => {
  describe('add event', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: ADD_EVENT })).toEqual(initState);
    });

    it('should handle ADD_EVENT_FULFILLED', () => {
      expect(reducer(initState, {
        type: ADD_EVENT_FULFILLED,
        payload: { data: 'event details' }
      }).status).toEqual("Success");
    });

    it('should handle SIGN_UP_REJECTED', () => {
      expect(reducer(initState, {
        type: ADD_EVENT_REJECTED,
        payload: { data: 'event details' }
      }).status).toEqual("Error");
    });

    it('should return default state', () => {
      expect(reducer(initState, { type: 'INVALID_ACTION' })).toEqual(initState);
    });
  });

  describe('get event', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: GET_EVENT })).toEqual(initState);
    });

    it('should handle GET_EVENT_FULFILLED', () => {
      expect(reducer(initState, {
        type: GET_EVENT_FULFILLED,
        payload: { data: 'event details' }
      }).status).toEqual("success");
    });

    it('should handle GET_EVENT_REJECTED', () => {
      expect(reducer(initState, {
        type: GET_EVENT_REJECTED,
        payload: { data: 'event details' }
      }).status).toEqual("Error");
    });

    it('should return default state', () => {
      expect(reducer(initState, { type: 'INVALID_ACTION' })).toEqual(initState);
    });
  });

  describe('modify event', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: MODIFY_EVENT })).toEqual(initState);
    });

    it('should handle MODIFY_EVENT_FULFILLED', () => {
      expect(reducer(initState, {
        type: MODIFY_EVENT_FULFILLED,
        payload: { data: 'event details' }
      }).status).toEqual("Success");
    });

    it('should handle MODIFY_EVENT_REJECTED', () => {
      expect(reducer(initState, {
        type: MODIFY_EVENT_REJECTED,
        payload: { data: 'event details' }
      }).status).toEqual("Error");
    });

    it('should return default state', () => {
      expect(reducer(initState, { type: 'INVALID_ACTION' })).toEqual(initState);
    });
  });
});
