import { combineReducers } from "redux";
import news_reducer from "./news_reducer";
import picture_reducer from "./picture_reducer";

const indexReducers = combineReducers({
  news_reducer: news_reducer,
  picture_reducer: picture_reducer
});
export default indexReducers;
