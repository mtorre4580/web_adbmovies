import * as types from '../constants/ActionTypes';

let initalState = {
    items: [],
    loading: false,
    type: 'grid',
    error: false,
    query: null
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.LOADING_SEARCH:
            return {
                ...state,
                loading: true
            }
        case types.LOADING_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                items: payload.items,
                error: false
            }
        case types.LOADING_SEARCH_ERR:
            return {
                ...state,
                loading: false,
                items: [],
                error: true
            }
        case types.FILTER_RESULTS_SEARCH:
            return {
                ...state,
                items: state.items.filter(i => i.type === payload.by)
            }
        case types.CHANGE_VIEW_ITEM:
            return {
                ...state,
                type: payload.view
            }
        default:
            return state
    }
};
  