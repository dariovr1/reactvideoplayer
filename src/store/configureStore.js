import { createStore, combineReducers } from 'redux';
import videoReducers from '../reducers/video';
import searchReducers from '../reducers/search';

export default () => {
  const store = createStore(
    combineReducers({
      video: videoReducers,
      search: searchReducers
    })
  );

  return store;
};
