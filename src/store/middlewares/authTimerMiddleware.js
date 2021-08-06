import { isTimeUp } from "../../utils/isTimeUp";
import { authActions, logout } from "../auth/authActions";

export function authTimerMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (
        action.type !== authActions.LOGIN &&
        action.type !== authActions.SIGNUP &&
        action.type !== authActions.LOGOUT
      ) {
        if (isTimeUp()) {
          console.log("USER LOGOUT");
          return dispatch(logout());
        }
      }

      return next(action);
    };
  };
}
