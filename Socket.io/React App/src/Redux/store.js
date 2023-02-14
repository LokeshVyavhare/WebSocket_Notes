import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthReducer } from "./AuthReducer/AuthReducer";
import { BugReducer } from "./BugsReducer/BugReducer";

const rootReducer = combineReducers({
    auth:AuthReducer,
    bugs:BugReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));