import { combineReducers, Reducer } from "redux";

import { storeState, storeStateReducer } from "./store.reducer";

export interface IAppState {
  storeState: storeState;
}

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  storeState: storeStateReducer,
});
