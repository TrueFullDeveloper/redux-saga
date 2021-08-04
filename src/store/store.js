import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

const saga = createSagaMiddleware();
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//saga.run(sagaWatcher);
