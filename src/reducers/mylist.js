import * as types from '../constants/ActionTypes';
import LocalStorageApi from '../services/LocalStorageApi';

let initalState = {
    items: [],
    type: 'list'
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.LOAD_FAVORITES:
            return {
                ...state,
                items: payload.items
            }
        case types.FILTER_FAVORITES:
            return {
                ...state,
                items: payload.items
            }
        case types.UPDATE_FAVORITES:
            return {
                ...state,
                items: updateFavorites(state,payload.item)
            }
        case types.CHANGE_VIEW_ITEM:
            return {
                ...state,
                type: payload.view
            }
        case types.SAVE_FAVORITES:
            return {
                ...state,
                type: payload.view
            }
        default:
            return state
    }
};
  
const updateFavorites = (state,favorite) => {
    let index = state.items.findIndex(f => f.id === favorite.id);
    let favorites = [...state.items];
    favorites[index] = Object.assign(favorite,{viewed:true});
    LocalStorageApi.saveFavorites(favorites);
    return favorites;
}