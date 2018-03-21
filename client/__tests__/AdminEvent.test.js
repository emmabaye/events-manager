import AdminEvent from '../components/AdminEvent.jsx';

describe('AdminEvent Component', () => {
  const props = {
    event: {
      id: "1",
      title: "",
      description: "",
      location: "",
      date: "",
      time: "",
      status: 'true'
    },
    show: () => {}
  };

  it('it should render component shallow', () => {
    const wrapper = shallow(<AdminEvent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render AdminEvent component mounted', () => {
    const wrapper = mount(<AdminEvent {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('it should handle onClick event', () => {
    const wrapper = shallow(<AdminEvent {...props} />);
    let viewEventButton = wrapper.find('.btn-primary');
    viewEventButton.simulate('click');
  });
});
