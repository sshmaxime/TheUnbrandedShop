import { item, cartItem } from "../types/items";

export type storeState = {
  items: Map<string, item>
  itemsInCart: cartItem[]
};

export const storeStateReducer = (
  state: storeState = {
    items: new Map<string, item>(),
    itemsInCart: localStorage.getItem("cart") ? JSON.parse(String(localStorage.getItem("cart"))) as cartItem[] : []
  },
  action: any
): storeState => {
  switch (action.type) {
    case "REMOVE_ITEM": {
      state.itemsInCart.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));
      return {
        ...state,
      }
    }
    case "ADD_ITEM": {
      state.itemsInCart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));
      return {
        ...state,
      }
    }
    case "ITEMS": {
      state.items.clear();

      (action.payload as item[]).forEach((item: item) => {
        state.items.set(item.id, item);
      })
      return {
        ...state
      }
    }
    case "ITEM": {
      const item = action.payload as item;
      state.items.set(item.id, item);
      return {
        ...state
      }
    }
    default:
      return {
        ...state
      };
  }
};