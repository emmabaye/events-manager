import { BrowserRouter } from 'react-router-dom';
import ConnectedModifyEvent, { ModifyEvent } from '../../components/ModifyEvent.jsx';

describe('ModifyEvent Component', () => {
  const initialState = {
    eventReducer: {
      status: "Error",
      message: "",
    },
    centers: [{
      id: 1,
      name: "City Hall"
    }]
  };

  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => str
  };

  const props = {
    dispatch: () => {},
    show: () => {},
    match: {
      params: {
        id: "1"
      }
    }
  };

  describe('ModifyEvent form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<BrowserRouter><ModifyEvent {...props}/></BrowserRouter>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<BrowserRouter>
        <Provider store={store}>
          <ConnectedModifyEvent />
        </Provider></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<BrowserRouter><ModifyEvent {...props} status="Success" /></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('ModifyEvent events', () => {
    it('it should submit form', () => {
      const wrapper = mount(<BrowserRouter>
        <Provider store={store}>
          <ConnectedModifyEvent {...props} />
        </Provider>
      </BrowserRouter>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
