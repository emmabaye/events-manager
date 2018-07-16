import ConnectedDeleteModal from '../components/DeleteModal.jsx';

describe('DeleteModal Component', () => {
  global.localStorage = {
    getItem: (str) => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJpZCI6NzUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxMjEyMzIyMSwiZXhwIjoxNTEyMjA5NjIxfQ' +
    '.IwykmkkET5VmBvTEyPPXfMOq611ITQaoh-9wV11mJgE'
  };

  const initialState = {
    eventReducer: {
      userEvents: []
    },
    centerReducer: {
      allCenters: []
    }
  };

  const store = mockStore(initialState);

  const props = {
    itemId: "1",
    item: "center"
  };

  it('it should render DeleteModal component', () => {
    const wrapper = shallow(<Provider store={store}><ConnectedDeleteModal {...props} /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should handle onClick event', () => {
    const wrapper = mount(<Provider store={store}><ConnectedDeleteModal {...props} /></Provider>);
    let DeleteButton = wrapper.find('.btn-danger');
    DeleteButton.simulate('click');
  });
});
