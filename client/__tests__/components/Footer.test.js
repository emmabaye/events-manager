import Footer from '../../components/Footer.jsx';

describe('Footer should render self', () => {
  it('it should render for body', () => {
    const { wrapper } = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
