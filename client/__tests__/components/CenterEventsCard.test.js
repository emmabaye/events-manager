import CenterEventsCard from '../../components/CenterEventsCard.jsx'; //eslint-disable-line

describe('CenterEventsCard Component', () => {
  const initialState = {
    centerReducer: {
      allCenters: {
        status: "",
        message: "",
        data: []
      },
      status: "",
      message: "",
      center: {},
      centerEvents: {
        centerEvents: {
          rows: [{
            id: '1',
            title: 'Seminar',
            description: "",
            location: "",
            time: "5:00",
            date: '2020-01-01',
            image: "",
            Center: []
          }]
        }
      }
    }
  };

  const store = mockStore(initialState);

  const props = {

  };

  global.localStorage = {
    getItem: () => {}
  };

  describe('CenterEventsCardu  should render self', () => {
    it('it should render for smart component', () => {
      const wrapper = mount(<Provider store={store} ><CenterEventsCard {...props} /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should return null for undefined events rows', () => {
      const wrapper = mount(<Provider store={store} ><CenterEventsCard /></Provider>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.length).toEqual(1);
    });
  });
});
