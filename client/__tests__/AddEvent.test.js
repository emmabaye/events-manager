import { BrowserRouter } from 'react-router-dom';
import ConnectedAddEvent, { AddEvent } from '../components/AddEvent.jsx';

describe('AddEvent Component', () => {
  const initialState = {
    eventReducer: {
      status: "Error",
      message: "",
    }
  };


  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => str
  };

  const props = {
    dispatch: () => {},
    show: () => {}
  };

  describe('AddEvent form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<BrowserRouter><AddEvent {...props}/></BrowserRouter>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<BrowserRouter><Provider store={store}><ConnectedAddEvent /></Provider></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<BrowserRouter><AddEvent {...props} status="Success" /></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('AddEvent events', () => {
    it('it should submit form', () => {
      const wrapper = mount(<BrowserRouter><Provider store={store}><ConnectedAddEvent /></Provider></BrowserRouter>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
