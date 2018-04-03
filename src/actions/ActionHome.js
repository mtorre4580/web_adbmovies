import * as types from '../constants/ActionTypes';

export default class ActionHome {

    static favoritesSuccess = favorites => ({type: types.LOADING_FAVORITES_SUCCESS, favorites});

}