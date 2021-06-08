import { SET_ACCESS_TOKEN } from '../actions/types';
const initialState = {
  validToken: false
};

const booleanActionPayload = ({ status }) => {
  if (status) {
    return true;
  } else {
    return false;
  }
};

const security = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        token: action.payload.data
      };
    default:
      return state;
  }
};

export default security;
