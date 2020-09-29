import { item, cartItem } from "../types/items";

export type storeState = {
  items: Map<string, item>
  itemsInCart: cartItem[]
};

export const storeStateReducer = (
  state: storeState = {
    items: new Map<string, item>(),
    itemsInCart: []
  },
  action: any
): storeState => {
  switch (action.type) {
    case "REMOVE_ITEM": {
      state.itemsInCart.splice(action.payload, 1);
      return {
        ...state,
      }
    }
    case "ADD_ITEM": {
      state.itemsInCart.push(action.payload)
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