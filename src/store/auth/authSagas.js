import { takeEvery } from "redux-saga/effects";
import { TIME_STAMP, USER_TOKEN } from "../../config/constans";
import { authActions } from "./authActions";

function* loginWorker(action) {
  try {
    yield localStorage.setItem(TIME_STAMP, new Date());
    yield localStorage.setItem(USER_TOKEN, action.payload.userToken);
    yield console.log("Time stamp is ", new Date());
  } catch (error) {
    console.log(error.message);
  }
}

function* logoutWorker() {
  try {
    yield localStorage.removeItem(TIME_STAMP);
    yield localStorage.removeItem(USER_TOKEN);
  } catch (error) {
    yield console.log(error.message);
  }
}

export function* authWatcher() {
  yield takeEvery(authActions.LOGIN, loginWorker);
  yield takeEvery(authActions.SIGNUP, loginWorker);
  yield takeEvery(authActions.LOGOUT, logoutWorker);
}
