import { TIME_STAMP, TIMER_MINUTS } from "../../config/constans";
import { LOGIN, SIGNUP, logout, LOGOUT } from "../auth/authActions";

const isTimeUp = () => {
  const lastLoginTime = new Date(localStorage.getItem(TIME_STAMP));

  if (Math.floor((new Date() - lastLoginTime) / 1000) < TIMER_MINUTS * 60) {
    return false;
  }
  console.log("Time left " + Math.floor((new Date() - lastLoginTime) / 1000) + " sec");
  return true;
};

export function authTimerMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type !== LOGIN && action.type !== SIGNUP && action.type !== LOGOUT) {
        if (isTimeUp()) {
          return dispatch(logout());
        }
      }

      return next(action);
    };
  };
}
