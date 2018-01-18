import React, { Components } from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import SignOut from '../components/SignOut.jsx';

Enzyme.configure({ adapter: new Adapter() });

global.localStorage = {
  setItem: (str) => str
};


describe('Sign out Component', () => {
  describe('Sign out component should render self', () => {
    it('should render self', () => {
      const wrapper = shallow(<SignOut />);
    });
  });
});
