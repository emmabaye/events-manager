import React, { Components } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from '../components/LandingPage.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Landing Page Component', () => {
  it('it should render landing page', () => {
    const { wrapper } = shallow(<LandingPage />);
  });
});
