import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { signUp, signIn } from '../actions/authAction';

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const signUpDetails = {
  firstName: "John",
  lastName: "Jack",
  email: "johnjack@email.com",
  password: "password"
};

const signInDetails = {
  email: "johnjack@email.com",
  password: "password"
};

const fulfilledResponse = {
  data: {
    data: {
      token: "token"
    }
  }
};

global.localStorage = {
  setItem: (key) => key
};


describe('async actions', () => {
  describe('sign up action', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('creates SIGN_UP_FULFILLED when creating a user', () => {
      axiosMock.onPost('/api/v1/users', signUpDetails).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'SIGN_UP' },
        { type: 'SIGN_UP_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(signUp(signUpDetails)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });


  describe('sign in action', () => {
    afterEach(() => {
      axiosMock.reset();
    });


    it('creates SIGN_IN_FULFILLED when creating a user', () => {
      axiosMock.onPost('/api/v1/users/login', signInDetails).reply(200, fulfilledResponse);

      const expectedActions = [
        { type: 'SIGN_IN' },
        { type: 'SIGN_IN_FULFILLED', payload: fulfilledResponse }
      ];

      const store = mockStore({});

      return store.dispatch(signIn(signInDetails)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
