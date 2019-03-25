import {
  put,
  call,
  takeLatest,
  takeEvery,
  fork,
  take,
  select
} from "redux-saga/effects";
import "whatwg-fetch";
import { actionTypes } from "../action/actionTypes";
import fetchSmart from "../service/fetch";
import { urlMap, pic_url } from "../service/UrlMap";

function* getRecommend() {
  while (true) {
    const action = yield take(actionTypes.RECOMMEND);
    const index = action.index;
    const url = pic_url[index];
    try {
      const res = yield call(fetchSmart, url);
      if (index === 0) {
        yield put({ type: actionTypes.RECOMMEND_SAGA, recommend: res });
      } else if (index === 1) {
        yield put({ type: actionTypes.NEWS_SAGA, news: res });
      } else if (index === 2) {
        yield put({ type: actionTypes.STAR_SAGA, star: res });
      }
    } catch (e) {
      alert(e);
    }
  }
}
export default function* root(): any {
  yield fork(getRecommend);
}
