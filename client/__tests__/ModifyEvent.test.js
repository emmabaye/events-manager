import ConnectedModifyEvent, { ModifyEvent } from '../components/ModifyEvent.jsx';

describe('ModifyEvent Component', () => {
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
    show: () => {},
    match: {
      params: {
        id: "1"
      }
    }
  };

  describe('ModifyEvent form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<ModifyEvent {...props}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<Provider store={store}><ConnectedModifyEvent /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<ModifyEvent {...props} status="Success" />);
    });
  });

  describe('ModifyEvent events', () => {
    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedModifyEvent {...props} /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
