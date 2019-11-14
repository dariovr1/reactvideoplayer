import { GET_FIRST_VIDEO } from '../types/index';

const initialState = {
  item :""
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRST_VIDEO:
      return {
              ...state,
              item : action.item
            }
    default:
      return state;
  }
};
