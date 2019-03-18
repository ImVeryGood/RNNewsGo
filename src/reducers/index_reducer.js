import { combineReducers } from "redux";
import news_reducer from "./news_reducer";

const indexReducers = combineReducers({
  news_reducer: news_reducer
});
export default indexReducers;
