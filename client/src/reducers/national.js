import { GET_NATIONALITY_LIST } from '../actions/types';

const national = (state = {}, action) => {
  switch (action.type) {
    case GET_NATIONALITY_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default national;
