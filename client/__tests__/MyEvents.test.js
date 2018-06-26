import ConnectedMyEvents, { MyEvents } from '../components/MyEvents.jsx';

describe('MyEvents Component', () => {
  const initialState = {
    myEvents: {
      data: {
        rows: []
      }
    },
    eventReducer: {
      userEvents: {
        data: {
          rows: [],
          page: {}
        }
      }
    },
  };


  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => str
  };

  describe('MyEvents form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<MyEvents />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedMyEvents /></Provider>);
      expect(wrapper.length).toEqual(1);
    });
  });
});
