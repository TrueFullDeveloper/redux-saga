import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_POSTS, REQUEST_POSTS } from "./types";
import { hideLoader, showLoader } from "../loader/loaderActions";

export function* authWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* authWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
  }
}
