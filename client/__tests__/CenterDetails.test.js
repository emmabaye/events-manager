import ConnectedCenterDetails, { CenterDetails } from '../components/CenterDetails.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('CenterDetails Component', () => {
  const initialState = {
    centerReducer: {
      status: "Error",
      message: "",
      center: {
        data: [{
          id: '1',
          name: 'City Hall',
          description: {
            substr: () => {}
          },
          location: {
            substr: () => {}
          },
          capacity: "500",
          price: "50000",
          image: "",
          available: 'false',
          Events: []
        }]
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
    center: initialState.centerReducer.center,
    match: {
      params: {
        id: '1'
      }
    },
  };

  describe('CenterDetails form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<BrowserRouter><CenterDetails {...props} /></BrowserRouter>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<BrowserRouter><Provider store={store}><ConnectedCenterDetails match={props.match}/></Provider></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });
  });
});
