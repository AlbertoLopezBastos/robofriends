import { shallow } from 'enzyme';
import Card from './Card';

it('Expect to render Card Component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})
