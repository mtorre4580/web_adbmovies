import * as types from '../constants/ActionTypes';

let initalState = {
    favorites: []
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.LOADING_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: payload.favorites
            }
        default:
            return state
    }
};
  