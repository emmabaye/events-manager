import CenterCard from '../components/CenterCard.jsx';

describe('CenterCard Component', () => {
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

  it('it should render CenterCard component', () => {
    const wrapper = shallow(<CenterCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render CenterCard component', () => {
    props.centerDetails.available = 'false';
    const wrapper = mount(<CenterCard {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('it should handle onClick event', () => {
    const wrapper = mount(<CenterCard {...props} />);
    let viewCenterCardButton = wrapper.find('.btn-primary');
    viewCenterCardButton.simulate('click');
  });
});
