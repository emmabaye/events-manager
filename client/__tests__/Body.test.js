import React, { Components } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Body from '../components/Body.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Body of Landing page should render self', () => {
    it('it should render for body', () => {
      const { wrapper } = shallow(<Body />);
    });
  });