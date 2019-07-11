import ACTIONS from "./actions";
import _ from "lodash";

const initialState = {
  isReady: false,
  route: "/",
  // "cart" object contains all itmes in customer's cart
  // Each item is and must be of type model.item
  cart: []
};

const globalReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  let payload = action.payload;

  switch (action.type) {
    case ACTIONS.Types.SET_READY:
      newState.isReady = true;
      return newState;

    case ACTIONS.Types.ADD_ITEM_TO_CART:
      newState.cart.push(payload.item);
      return newState;

    case ACTIONS.Types.REMOVE_ITEM_FROM_CART:
      newState.cart.splice(payload.index, 1);
      return newState;

    case ACTIONS.Types.SET_ROUTE:
      newState.route = payload.route;
      return newState;

    default:
      return newState;
  }
};

export default globalReducer;
