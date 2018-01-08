import React, { Components } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../components/Footer.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer should render self', () => {
  it('it should render for body', () => {
    const { wrapper } = shallow(<Footer />);
  });
});
