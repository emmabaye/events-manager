import LandingPage from '../components/LandingPage.jsx';

describe('Landing Page Component', () => {
  it('it should render landing page', () => {
    const { wrapper } = shallow(<LandingPage />);
  });
});
