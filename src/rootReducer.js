import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { home, movies, series, mylist, detail, search } from './reducers';

export default combineReducers({
  home,
  movies,
  series,
  mylist,
  detail,
  search,
  form: formReducer,
  router: routerReducer
});



