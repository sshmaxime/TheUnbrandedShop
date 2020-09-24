import commonConstants from "../constants/common.constants";
import { item, cartItem, size } from "../types/items";

type commonState = {
  items: item[]
  itemsInCart: cartItem[]
};

const commonState = (
  state: commonState = {
    items: [],
    itemsInCart: []
  },
  action: any
): commonState => {
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
    default:
      return {
        ...state
      };
  }
};

export { commonState };