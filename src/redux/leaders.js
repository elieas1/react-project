import * as ActionTypes from "./actionTypes";

export const Leaders = (
  state = {
    leaders: [],
    isLoading: true,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        leaders: action.payload,
        isLoading: false,
        errMess: null,
      };
    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        leaders: [],
        isLoading: false,
        errMess: action.payload,
      };
    case ActionTypes.LEADERS_LOADING:
      return {
        ...state,
        leaders: [],
        isLoading: true,
        errMess: null,
      };
    default:
      return state;
  }
};
