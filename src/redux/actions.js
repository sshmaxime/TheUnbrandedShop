// Types of action
const Types = {
  SET_READY: "SET_READY",

  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART"
};

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

const setReady = () => ({
  type: Types.SET_READY,
  payload: {}
});

export default {
  addItemToCart,
  removeItemFromCart,
  setReady,
  Types
};
