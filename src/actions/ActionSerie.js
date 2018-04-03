import * as types from '../constants/ActionTypes';

export default class ActionSerie {

  static seriesSuccess = items => ({type: types.LOADING_SERIES_SUCCESS, items});
  
  static seriesLoading = () => ({type: types.LOADING_SERIES});
  
  static seriesError = error => ({type: types.LOADING_SERIES_ERR, error});
  
  static changeViewItem = view => ({type: types.CHANGE_VIEW_ITEM, view});
  
  static filterSeriesLoading = () => ({type: types.LOADING_FILTER_SERIES});
  
  static filterSeriesSuccess = items => ({type: types.LOADING_FILTER_SERIES_SUCESS, items});
  
  static filterSeriesError = error => ({type: types.LOADING_FILTER_SERIES_ERR, error});
  
  static addFavorite = serie => ({type: types.ADD_FAVORITE_SERIE, serie});
  
  static addGenres = genres => ({type: types.ADD_GENRES, genres});

}