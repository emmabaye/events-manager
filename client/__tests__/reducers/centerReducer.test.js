import reducer from '../../reducers/centerReducer';
import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED,
  ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED,
  GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED,
  MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED
} from '../../types/center';

const initState = {};

describe('center reducer', () => {
  describe('get all centers', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: GET_ALL_CENTERS })).toEqual(initState);
    });

    it('should handle GET_CENTER_FULFILLED', () => {
      expect(reducer(initState, {
        type: GET_ALL_CENTERS_FULFILLED,
        payload: []
      })).toEqual({ allCenters: [] });
    });

    it('should handle GET_ALL_CENTER_REJECTED', () => {
      expect(reducer(initState, {
        type: GET_ALL_CENTERS_REJECTED,
        payload: {}
      })).toEqual({});
    });

    it('should return default state', () => {
      expect(reducer(initState, { type: 'INVALID_ACTION' })).toEqual(initState);
    });
  });

  describe('add center', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: ADD_CENTER })).toEqual(initState);
    });

    it('should handle ADD_CENTER_FULFILLED', () => {
      expect(reducer(initState, {
        type: ADD_CENTER_FULFILLED,
        payload: { message: '' }
      }).status).toEqual("Success");
    });

    it('should handle ADD_CENTER_REJECTED', () => {
      expect(reducer(initState, {
        type: ADD_CENTER_REJECTED,
        payload: { message: '' }
      }).status).toEqual("Error");
    });
  });

  describe('modify center', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: MODIFY_CENTER })).toEqual(initState);
    });

    it('should handle MODIFIED_CENTER_FULFILLED', () => {
      expect(reducer(initState, {
        type: MODIFY_CENTER_FULFILLED,
        payload: { status: 'Success' }
      }).status).toEqual("Success");
    });

    it('should handle MODIFY_CENTER_REJECTED', () => {
      expect(reducer(initState, {
        type: MODIFY_CENTER_REJECTED,
        payload: { message: '' }
      }).status).toEqual("Error");
    });
  });

  describe('get center', () => {
    it('should return inital state', () => {
      expect(reducer(initState, { type: GET_CENTER })).toEqual(initState);
    });

    it('should handle GET_CENTER_FULFILLED', () => {
      expect(reducer(initState, {
        type: GET_CENTER_FULFILLED,
        payload: { data: { center: "City Hall" } }
      })).toEqual({ center: { center: "City Hall" } });
    });

    it('should handle ADD_CENTER_REJECTED', () => {
      expect(reducer(initState, {
        type: GET_CENTER_REJECTED,
        payload: { message: '' }
      }).status).toEqual("Error");
    });
  });
});
