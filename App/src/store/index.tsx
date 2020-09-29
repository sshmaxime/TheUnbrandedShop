import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";
import { socketMiddleware } from "./middleware/socket"

export const store = createStore(reducers, applyMiddleware(thunk, socketMiddleware() as any));


