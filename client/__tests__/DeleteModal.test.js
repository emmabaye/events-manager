import DeleteModal from '../components/DeleteModal.jsx';

describe('DeleteModal Component', () => {
  global.localStorage = {
    getItem: (str) => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxMjEyMzIyMSwiZXhwIjoxNTEyMjA5NjIxfQ.IwykmkkET5VmBvTEyPPXfMOq611ITQaoh-9wV11mJgE'
  };

  const props = {
    objectId: "1"
  };

  it('it should render DeleteModal component', () => {
    const wrapper = shallow(<DeleteModal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should handle onClick event', () => {
    const wrapper = mount(<DeleteModal {...props} />);
    let DeleteButton = wrapper.find('.btn-danger');
    DeleteButton.simulate('click');
  });
});
