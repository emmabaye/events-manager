import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Event  from '../components/Event.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Event Component', () => {

  const props = {
      eventDetails:{
        id: '1',
        title: 'Seminar',
        description: "",
        location: "",
        time:"5:00",
        date:Date.now(),
        image: "",
        Center:[]
      }
    };

  describe('Event  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<Event {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});
