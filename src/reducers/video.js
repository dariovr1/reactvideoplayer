import { GET_FIRST_VIDEO } from '../types/index';

const videoReducerDefaultState = [];

export default (state = videoReducerDefaultState, action) => {
  switch (action.type) {
    case GET_FIRST_VIDEO:
      return [
        ...state,
        action.item
      ];
    default:
      return state;
  }
};
