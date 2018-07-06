import { BrowserRouter } from 'react-router-dom';
import AdminEvent from '../../components/AdminEvent.jsx';

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
    const wrapper = shallow(<BrowserRouter><AdminEvent {...props} /></BrowserRouter>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render AdminEvent component mounted', () => {
    const wrapper = mount(<BrowserRouter><AdminEvent {...props} /></BrowserRouter>);
    expect(wrapper.length).toEqual(1);
  });

 /*
  it('it should handle onClick event', () => {
    const wrapper = shallow(<BrowserRouter><AdminEvent {...props} /></BrowserRouter>);
    let viewEventButton = wrapper.find('Link');
    viewEventButton.simulate('click');
  });
  */
  
});
