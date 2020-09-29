import { createStore, applyMiddleware, Store, Action, Dispatch } from "redux";
import io from 'socket.io-client';
import { item } from "../types/items";

export const socketMiddleware = () => (store: Store) => {
  const socket = io('http://localhost:3001');

  socket.on("ITEMS", (items: item[]) => {
    store.dispatch({ type: "ITEMS", payload: items });
  })

  socket.on("ITEM", (item: item) => {
    store.dispatch({ type: "ITEM", payload: item });
  })

  return (next: Dispatch<any>) => (action: Action) => { return next(action); }
}