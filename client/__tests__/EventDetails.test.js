import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedEventDetails, { EventDetails } from '../components/EventDetails.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('EventDetails Component', () => {

  const initialState = {
    eventReducer: {
      status: "Error",
      message: "",
      event:{
        id: '1',
        title: 'Seminar',
        description: "",
        location: "",
        time:"5:00",
        date:Date.now(),
        image: "",
        Center:[]
      }
    }
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => {
      return str;
    }
  }

  const props = {
    dispatch: () => {},
    centerId: "1",
    event: initialState.eventReducer.event,
    match: {
      params: {
        id:'1'
      }
    },
  };

  describe('EventDetails form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<EventDetails {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedEventDetails match={props.match}/></Provider>);
    });

  });

});
