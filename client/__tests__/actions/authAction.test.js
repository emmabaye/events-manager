import { signUp, signIn } from '../../actions/authAction';

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

      return store.dispatch(signUp(signUpDetails)).then(() => { //eslint-disable-line max-nested-callbacks
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

      return store.dispatch(signIn(signInDetails)).then(() => { // eslint-disable-line max-nested-callbacks
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
