// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import runner from './runner';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    runner
  });
}
