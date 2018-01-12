import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminEvent from '../components/AdminEvent.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('AdminEvent Component', () => {
  const props = {
    event: {
      id:"1",
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
  });

  it('it should handle onClick event', () => {
    const wrapper = shallow(<AdminEvent {...props} />);
    let viewEventButton = wrapper.find('.btn-primary');
    viewEventButton.simulate('click');
  });
});
