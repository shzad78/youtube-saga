import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchVideosSaga(action) {
  // const { query, initial } = action.payload;
  const { payload: { query, initial } } = action;
  yield call(delay, 1000);
  yield put(actions.fetchVideosAttempt());
  // const body = yield call(fetch, url);
  // const res = yield call([body, body.json]);
  try {
    const res = yield call(api.youtube, query);
    yield put(actions.fetchVideosSuccess(res));
    if (initial) {
      yield put(actions.selectVideo(res.items[0]));
    }
  } catch (e) {
    yield put(actions.fetchVideosFail(e));
  }
}

// other effects

// take to react to another object type

// select - to get data from store
//       takes a cb and gives state as a goody

// race - specify more than one yields
//    which ever comes first will win

// fork - for branching

// all - will yeild all of them befor proceeding









