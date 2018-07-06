import { BrowserRouter } from 'react-router-dom';
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
    const wrapper = shallow(<BrowserRouter><CenterCard {...props} /></BrowserRouter>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render CenterCard component', () => {
    props.centerDetails.available = 'false';
    const wrapper = mount(<BrowserRouter><CenterCard {...props} /></BrowserRouter>);
    expect(wrapper.length).toEqual(1);
  });

});
