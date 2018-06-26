import Center from '../components/Center.jsx';

describe('Center Component', () => {
  const props = {
    centerDetails: {
      id: "1",
      name: "",
      description: {
        substr: () => {}
      },
      location: {
        substr: () => {}
      },
      capacity: "",
      price: "",
      available: 'true'
    },
    show: () => {}
  };
  const initialState = {
    eventReducer: {
      userEvents:[]
    },
    centerReducer: {
      allCenters:[]
    }
  };
  const store = mockStore(initialState);

  it('it should render Center component', () => {
  const wrapper = shallow(<Provider store={store} ><Center {...props} /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render Center component', () => {
    props.centerDetails.available = 'false';
    const wrapper = mount(<Provider store={store}><Center {...props} /></Provider>);
    expect(wrapper.length).toEqual(1);
  });

  it('it should handle onClick event', () => {
    const wrapper = mount(<Provider store={store} ><Center {...props} /></Provider>);
    let viewCenterButton = wrapper.find('.btn-primary');
    let submitButton = wrapper.find('.btn-success');
    viewCenterButton.simulate('click');
    submitButton.simulate('click');
  });
});
