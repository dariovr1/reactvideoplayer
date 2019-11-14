import { SET_TEXT_SEARCH } from '../types/index';

const searchReducerDefaultState = {
  text: ''
};

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_SEARCH:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
