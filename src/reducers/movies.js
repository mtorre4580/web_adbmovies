import OrderMovies from '../services/OrderMovies';
import DatesFilter from '../services/DatesFilter';
import * as types from '../constants/ActionTypes';

let initalState = {
    items: [],
    genres: [],
    dates: DatesFilter,
    orders: OrderMovies,
    type: 'list',
    loading: false,
    error: false,
    title: 'Películas',
    detail: 'movies'
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.ADD_GENRES:
            return {
                ...state,
                genres: payload.genres
            }
        case types.LOADING_MOVIES:
            return {
                ...state,
                loading: true
            }
        case types.LOADING_MOVIES_SUCCESS:
            return {
                ...state,
                items: payload.items,
                loading: false,
                error: false
            }
        case types.LOADING_MOVIES_ERR:
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
        case types.LOADING_FILTER_MOVIES:
            return {
                ...state,
                loading: true
            }
        case types.LOADING_FILTER_MOVIES_SUCCESS:
            return {
                ...state,
                items: payload.items,
                loading: false,
                error: false
            }
        case types.LOADING_FILTER_MOVIES_ERR:
            return {
                ...state,
                items: [],
                loading: false,
                error: true
            }
        case types.ADD_FAVORITE_MOVIE:
            return {
                ...state,
                items: state.items.filter(i=>i.id !== payload.movie.id)
            }
        default:
            return state
    }
};
  