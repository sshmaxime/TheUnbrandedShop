import ACTIONS from "./actions";
import _ from "lodash";

const initialState = {
  isReady: false,
  // "cart" object contains all itmes in customer's cart
  // Each item is and must be of type model.item
  cart: [
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crzy",
      price: 299.99,
      info: [["helleeoD", "Supreme"], ["Material", "100% Cotton"]]
    },
    {
      imgUrl:
        "https://ae01.alicdn.com/kf/HTB1CLt4b79WBuNjSspeq6yz5VXav/Aolamegs-t-shirt-hommes-dr-le-photo-impression-hommes-t-shirts-col-rond-t-shirt-coton.jpg_640x640.jpg",
      title: "Crzy",
      price: 299.99,
      info: [["helleeoD", "Supreme"], ["Material", "100% Cotton"]]
    }
  ]
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

    default:
      return newState;
  }
};

export default globalReducer;
