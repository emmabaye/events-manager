import sinon from 'sinon';
import ConnectedAddCenter, { AddCenter } from '../../components/AddCenter.jsx';


describe('AddCenter Component', () => {
  const initialState = {
    centerReducer: {
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

  describe('AddCenter form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<AddCenter />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddCenter /></Provider>);
      expect(wrapper.length).toEqual(1);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<AddCenter {...props} status="Success" />);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('AddCenter events', () => {
    let event;
    it('it should handle onChange event', () => {
      event = { target: { name: "description", value: "best center" } };
      const wrapper = shallow(<AddCenter {...props} />);
      const spy = sinon.spy(wrapper.instance(), 'handleChange');
      wrapper.instance().handleChange(event);
      expect(wrapper.state().center.description).toBe('best center');
      expect(spy.calledOnce).toBeTruthy();
    });

    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddCenter /></Provider>);
      const button = wrapper.find('.btn');
      expect(button.length).toEqual(1);
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
