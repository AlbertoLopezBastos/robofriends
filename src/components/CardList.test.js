import { shallow } from 'enzyme';
import CardList from './CardList';

it('Expect to render CardList Component', () => {
  const mockRobots = [{ id: 1, name: 'John Jode', username: 'JohnJohn', enail: 'john@gmail.com' }]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})
