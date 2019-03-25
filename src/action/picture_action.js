import { actionTypes } from "./actionTypes";

const getRecommend = index => {
  return {
    type: actionTypes.RECOMMEND,
    index: index
  };
};
export const picture_action = {
  getRecommend
};
