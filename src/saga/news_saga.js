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
import { urlMap } from "../service/UrlMap";
function* getNews() {
  while (true) {
    yield take(actionTypes.NEWS);
    // fetchSmart(urlMap.bannerUrl)
    //   .then(response => {
    //     alert(response);
    //   })
    //   .catch(error => {
    //     alert(error);
    //   });
    fetch(urlMap.news_url, {
      method: "GET",
      headers: { Connection: "true" }
    })
      .then(response => response.json())
      .then(data => console.log("AAAAAdata is", data))
      .catch(error => console.log("AAAAAerror is", error));
    yield put({
      type: actionTypes.NEWS_SAGA,
      news_saga: Math.random(100 - 1)
    });
  }
}
export default function* root(): any {
  yield fork(getNews);
}
