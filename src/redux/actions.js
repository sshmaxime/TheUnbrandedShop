// Types of action
const Types = {
  SET_READY: "SET_READY",

  UPDATE_REMOTE_DATA: "UPDATE_REMOTE_DATA",

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

const updateRemoteData = (key, data) => ({
  type: Types.UPDATE_REMOTE_DATA,
  payload: {
    key: key,
    data: data
  }
});

const setReady = () => ({
  type: Types.SET_READY,
  payload: {}
});

export default {
  updateRemoteData,
  addItemToCart,
  removeItemFromCart,
  setReady,
  Types
};
