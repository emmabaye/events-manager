import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CenterCard from '../components/CenterCard.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('CenterCard Component', () => {
  const props = {
    centerDetails: {
      id:"1",
      name: "",
      description:{
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
  });

  it('it should handle onClick event', () => {
    const wrapper = mount(<CenterCard {...props} />);
    let viewCenterCardButton = wrapper.find('.btn-primary');
    viewCenterCardButton.simulate('click');
  });
});
