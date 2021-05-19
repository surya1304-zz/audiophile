import { createStore } from "redux";
import logger from "redux-logger";
import { reducer } from "./reducer";

const middlewares = [logger];

const store = createStore(reducer, middlewares);

export default store;
