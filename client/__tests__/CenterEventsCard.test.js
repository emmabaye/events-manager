import CenterEventsCard  from '../components/CenterEventsCard.jsx';

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
