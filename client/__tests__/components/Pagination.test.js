import sinon from 'sinon';
import Pagination from '../../components/Pagination.jsx';

const props = {
  firstPage: 1,
  currentPage: 4,
  previousPage: 3,
  nextPage: 5,
  lastPage: 6,
  dispatch: () => {},
  getItems: () => {}
};

describe('Pagination component should render self', () => {
  it('it should render for Pagination component', () => {
    const { wrapper } = shallow(<Pagination {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Pagination events', () => {
  it('it should handle click events for list item with class bb', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .bb');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });
});

describe('Pagination events', () => {
  it('it should handle click events for list item with class cc', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .cc');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });

  it('it should handle click events for list item with class dd', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .dd');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });

  it('it should handle click events for list item with class ee', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .ee');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });

  it('it should handle click events for list with class ff', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .ff');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });

  it('it should handle click events for list with class gg', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .gg');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });

  it('it should handle click events for list with class aa', () => {
    const wrapper = shallow(<Pagination {...props}/>);
    const spy = sinon.spy(wrapper.instance(), 'handleGetItems');
    const listItem = wrapper.find('.page-item .aa');
    listItem.simulate('click', {});
    expect(spy.calledOnce).toBeTruthy();
  });
});
