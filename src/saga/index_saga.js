import { fork } from "redux-saga/effects";
import news_saga from "./news_saga";
import picture_saga from "./picture_saga";
export default function* rootSaga() {
  yield fork(news_saga);
  yield fork(picture_saga);
}
