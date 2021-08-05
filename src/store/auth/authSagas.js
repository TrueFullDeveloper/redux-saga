import { takeEvery } from "redux-saga/effects";
import { TIME_STAMP } from "../../config/constans";
import { LOGIN, SIGNUP, LOGOUT } from "./authActions";

function* loginWorker() {
  try {
    yield localStorage.setItem(TIME_STAMP, new Date());
  } catch (error) {
    console.log(error.message);
  }
}

function* logoutWorker() {
  try {
    yield localStorage.removeItem(TIME_STAMP);
  } catch (error) {
    yield console.log(error.message);
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN, loginWorker);
  yield takeEvery(SIGNUP, loginWorker);
  yield takeEvery(LOGOUT, logoutWorker);
}
