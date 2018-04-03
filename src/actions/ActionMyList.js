import * as types from '../constants/ActionTypes';

export default class ActionMyList {

    static loadFavorites = items => ({type: types.LOAD_FAVORITES, items});

    static updateFavorite = item => ({type: types.UPDATE_FAVORITES, item});

    static changeViewItem = view => ({type: types.CHANGE_VIEW_ITEM, view});

    static saveFavorites = items => ({type: types.SAVE_FAVORITES, items});

}