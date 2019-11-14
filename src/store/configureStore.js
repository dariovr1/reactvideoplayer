import { createStore, combineReducers } from 'redux';
import videoReducers from '../reducers/video';
import searchReducers from '../reducers/search';

export default () => {
  const store = createStore(
    combineReducers({
      video: videoReducers,
      search: searchReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
