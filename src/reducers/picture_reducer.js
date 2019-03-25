import { actionTypes } from "../action/actionTypes";
import { fromJS, Map } from "immutable";

const initState = Map({
  recommend: [],
  news: [],
  star: []
});
const picture_reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RECOMMEND_SAGA:
      return state.set("recommend", action.recommend);
    case actionTypes.NEWS_SAGA:
      return state.set("news", action.news);
    case actionTypes.STAR_SAGA:
      return state.set("star", action.star);
    default:
      return state;
  }
};
export default picture_reducer;
