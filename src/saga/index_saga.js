import { fork } from "redux-saga/effects";
import news_saga from "./news_saga";
export default function* rootSaga() {
  yield fork(news_saga);
}
