import { actionTypes } from "../action/actionTypes";
import { fromJS, Map } from "immutable";

const initState = Map({
  news: "你好"
});
const news_reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.NEWS_SAGA:
      console.log("reducer=" + action.news_saga);
      return state.set("news", action.news_saga);
    default:
      return state;
  }
};
export default news_reducer;
