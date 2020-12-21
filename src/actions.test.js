import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED

} from './constants';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('search robots in the searchbox', () => {
  it('should create an action to search robots', () => {
    const text = 'woo';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
})

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});
const mock = new MockAdapter(axios);

describe('fetchs robots from the API', () => {
  beforeEach(() => store.clearActions())

  it('handles requesting robots API with success', () => {
    mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200)
    const expectedActions = [REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS];

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions().map(action => action.type)).toEqual(expectedActions)
    });
  })

  it('handles requesting robots API with failure', () => {
    mock.onGet('https://jsonplaceholder.typicode.com/users').reply(404)
    const expectedActions = [REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILED];

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions().map(action => action.type)).toEqual(expectedActions)
    });
  })
})

