import ConnectedApp, { App } from '../../containers/App';

describe('App Component', () => {
  const initialState = {
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  describe('App form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = shallow(<Provider store={store}><ConnectedApp /></Provider>);
      expect(wrapper.length).toEqual(1);
    });
  });
});
