import ACTIONS from "./actions";
import _ from "lodash";

const initialState = {
  isReady: false,
  // "remoteData" object contains every single records from the server
  // Each records is and must be of type deepstreamIO.Record
  remoteData: new Map([["store", null]]),
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
      newState.remoteData = state.remoteData;
      return newState;

    case ACTIONS.Types.UPDATE_REMOTE_DATA:
      const key = payload.key;
      const data = payload.data;
      newState.remoteData.set(key, data);
      return newState;
    default:
      return newState;
  }
};

export default globalReducer;
