import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as searchAPI from '../lib/api/search';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_SEARCH,
    READ_SEARCH_SUCCESS,
    READ_SEARCH_FAILURE,
] = createRequestActionTypes('search/READ_SEARCH');
//const UNLOAD_POST = 'post/UNLOAD_POST'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readSearch = createAction(READ_SEARCH, tag => tag);
// export const unloadPost = createAction(UNLOAD_POST);

const readSearchSaga = createRequestSaga(READ_SEARCH, searchAPI.readSearch);
export function* searchSaga() {
    yield takeLatest(READ_SEARCH, readSearchSaga);
}

const initialState = {
    search: null,
    error: null,
};

const search = handleActions(
    {
        [READ_SEARCH_SUCCESS]: (state, { payload: search }) => ({
            ...state,
            search,
        }),
        [READ_SEARCH_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        //[UNLOAD_POST]: () => initialState,
    },
    initialState,
);

export default search;
