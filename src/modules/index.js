import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import search, { searchSaga } from './search';

const rootReducer = combineReducers({
  loading,
  search,
});

export function* rootSaga() {
  yield all([searchSaga()]);
}

export default rootReducer;