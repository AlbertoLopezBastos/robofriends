import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED

} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {

  const initialStateSearch = {
    searchField: '',
  }


  it('should return the initial state ', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  })
  it('should handle CHANGE_SEARCHFIELD ', () => {
    expect(reducers.searchRobots(initialStateSearch, { type: CHANGE_SEARCHFIELD, payload: 'abc' })).toEqual({ searchField: 'abc' });
  })
})



describe('requestRobotsReducer', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  }

  it('should return the initial state ', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  })
  it('should handle REQUEST_ROBOTS_PENDING ', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING })).toEqual({ ...initialStateRobots, isPending: true });
  })
  it('should handle REQUEST_ROBOTS_SUCCESS ', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_SUCCESS, payload: [{ dummy: 'dummy' }] })).toEqual({ robots: [{ dummy: 'dummy' }], isPending: false });
  })
  it('should handle REQUEST_ROBOTS_FAILED ', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_FAILED, payload: 'error' })).toEqual({ robots: [], isPending: false, error: 'error' });
  })
})