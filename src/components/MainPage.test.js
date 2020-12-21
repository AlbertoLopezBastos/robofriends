import { shallow } from 'enzyme';
import MainPage from '../components/MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('Expect to render MainPage Component', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'john',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([]);
})

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'john',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  }
  const filteredRobots = [];

  const wrapper3 = shallow(<MainPage {...mockProps3} />)
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})