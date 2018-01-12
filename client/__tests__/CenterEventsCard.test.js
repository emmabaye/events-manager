import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import CenterEventsCard  from '../components/CenterEventsCard.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('CenterEventsCard Component', () => {
  const props = {
      events:[{
        id: '1',
        title: 'Seminar',
        description: "",
        location: "",
        time:"5:00",
        date:'2020-01-01',
        image: "",
        Center:[]
      }]
    };

  describe('CenterEventsCard  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<CenterEventsCard {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});
