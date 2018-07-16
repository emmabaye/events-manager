import Event from '../components/Event.jsx';

describe('Event Component', () => {
  const props = {
    eventDetails: {
      id: '1',
      title: 'Seminar',
      description: {
        substr: () => {}
      },
      venue: {
        substr: () => {}
      },
      time: "5:00",
      date: '2020-01-01',
      image: "",
      Center: []
    }
  };

  describe('Event  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<Event {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
