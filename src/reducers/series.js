import OrderSeries from '../services/OrderSeries';
import DatesFilter from '../services/DatesFilter';
import * as types from '../constants/ActionTypes';

let initalState = {
    items: [],
    genres: [],
    dates: DatesFilter,
    orders: OrderSeries,
    type: 'list',
    loading: false,
    error: false,
    title: 'Series',
    detail: 'series'
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.ADD_GENRES:
            return {
                ...state,
                genres: payload.genres
            }
        case types.LOADING_SERIES:
            return {
                ...state,
                loading: true
            }
        case types.LOADING_SERIES_SUCCESS:
            return {
                ...state,
                items: payload.items,
                loading: false,
                error: false
            }
        case types.LOADING_SERIES_ERR:
            return {
                ...state,
                items: [],
                loading: false,
                error: true
            }
        case types.CHANGE_VIEW_ITEM:
            return {
                ...state,
                type: payload.view
            }
        case types.LOADING_FILTER_SERIES:
            return {
                ...state,
                loading: true
            }
        case types.LOADING_FILTER_SERIES_SUCESS:
            return {
                ...state,
                items: payload.items,
                loading: false,
                error: false
            }
        case types.LOADING_FILTER_SERIES_ERR:
            return {
                ...state,
                items: [],
                loading: false,
                error: true
            }
        case types.ADD_FAVORITE_SERIE:
            return {
                ...state,
                items: state.items.filter(i=>i.id !== payload.serie.id)
            }
        default:
            return state
    }
};
  