import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { authWatcher } from "./auth/authSagas";
import { authTimerMiddleware } from "./middlewares/authTimerMiddleware";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware, authTimerMiddleware))
);
sagaMiddleware.run(authWatcher);
