// Types of action
const Types = {
  SET_READY: "SET_READY",

  UPDATE_REMOTE_DATA: "UPDATE_REMOTE_DATA"
};

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
  setReady,
  Types
};
