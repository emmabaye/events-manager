import ConnectedEventDetails, { EventDetails } from '../components/EventDetails.jsx';

describe('EventDetails Component', () => {
  const initialState = {
    eventReducer: {
      status: "Error",
      message: "",
      event: {
        id: '1',
        title: 'Seminar',
        description: "",
        location: "",
        time: "5:00",
        date: '2020-01-01',
        image: "",
        Center: []
      }
    }
  };

  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => str
  };

  const props = {
    dispatch: () => {},
    centerId: "1",
    event: initialState.eventReducer.event,
    match: {
      params: {
        id: '1'
      }
    },
  };

  describe('EventDetails form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<EventDetails {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedEventDetails match={props.match}/></Provider>);
    });
  });
});
