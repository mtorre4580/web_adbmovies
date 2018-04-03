import * as types from '../constants/ActionTypes';

export default class ActionSearch {

    static loadingSearch = () => ({type: types.LOADING_SEARCH});

    static loadingSearchSuccess = items => ({type: types.LOADING_SEARCH_SUCCESS, items});

    static loadingSearchErr = error => ({type: types.LOADING_SEARCH_ERR, error});

    static filterResultsSearch = by => ({type: types.FILTER_RESULTS_SEARCH, by});

    static changeViewItem = view => ({type: types.CHANGE_VIEW_ITEM, view});

}