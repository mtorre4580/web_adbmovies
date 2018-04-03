import * as types from '../constants/ActionTypes';

export default class ActionMovie {

  static moviesSuccess = items => ({type: types.LOADING_MOVIES_SUCCESS, items});
  
  static moviesLoading = () => ({type: types.LOADING_MOVIES});
  
  static moviesError = error => ({type: types.LOADING_MOVIES_ERR, error});
  
  static changeViewItem = view => ({type: types.CHANGE_VIEW_ITEM, view});
  
  static filterMoviesLoading = () => ({type: types.LOADING_FILTER_MOVIES});
  
  static filterMoviesSuccess = items => ({type: types.LOADING_FILTER_MOVIES_SUCCESS, items});
  
  static filterMoviesError = error => ({type: types.LOADING_FILTER_MOVIES_ERR, error});
  
  static addFavorite = movie => ({type: types.ADD_FAVORITE_MOVIE, movie});
  
  static addGenres = genres => ({type: types.ADD_GENRES, genres});

}