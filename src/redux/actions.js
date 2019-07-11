// Types of action
const Types = {
  SET_READY: "SET_READY",

  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",

  SET_ROUTE: "SET_ROUTE"
};

const setReady = () => ({
  type: Types.SET_READY,
  payload: {}
});

const addItemToCart = item => ({
  type: Types.ADD_ITEM_TO_CART,
  payload: {
    item: item
  }
});

const removeItemFromCart = index => ({
  type: Types.REMOVE_ITEM_FROM_CART,
  payload: {
    index: index
  }
});

const setRoute = newRoute => ({
  type: Types.SET_ROUTE,
  payload: {
    route: newRoute
  }
});

export default {
  addItemToCart,
  removeItemFromCart,
  setReady,
  setRoute,
  Types
};
