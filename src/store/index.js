import userReducer from "./user/reducer";
import teamReducer from "./teams/reducer";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
const store = createStore(
  combineReducers({
    user: userReducer,
    team: teamReducer,
  }),
  enhancer
);

export default store;
