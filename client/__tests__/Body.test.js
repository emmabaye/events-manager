import Body from '../components/Body.jsx';

describe('Body of Landing page should render self', () => {
  it('it should render for body', () => {
    const { wrapper } = shallow(<Body />);
    expect(wrapper.length).toEqual(1);
  });
});
