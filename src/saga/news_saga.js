import {
  put,
  call,
  takeLatest,
  takeEvery,
  fork,
  take,
  select
} from "redux-saga/effects";
import { actionTypes } from "../action/actionTypes";
function* getNews() {
  while (true) {
    yield take(actionTypes.NEWS);
    yield put({
      type: actionTypes.NEWS_SAGA,
      news_saga: Math.random(100 - 1)
    });
  }
}
export default function* root(): any {
  yield fork(getNews);
}
