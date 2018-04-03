import * as types from '../constants/ActionTypes';

let initalState = {
    detail: {},
    loadingDetail: false,
    loadingRecommendations: false,
    recomendations: [],
    type: '',
    errorDetail: false,
    errorRecommendations: false
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.LOADING_DETAIL:
            return {
                ...state,
                loadingDetail: true
            }
        case types.LOADING_DETAIL_SUCCESS:
            return {
                ...state,
                detail: Object.assign({},payload.detail),
                loadingDetail: false,
                errorDetail: false
            }   
        case types.LOADING_DETAIL_ERR:
            return {
                ...state,
                loadingDetail: false,
                detail: null,
                errorDetail: true
            }
        case types.LOADING_RECOMMENDATIONS:
            return {
                ...state,
                loadingRecommendations: true,
            }
        case types.LOADING_RECOMMENDATIONS_SUCCESS:
            return {
                ...state,
                loadingRecommendations: false,
                recomendations: payload.recommendations,
                errorRecommendations: false
            }
        case types.LOADING_RECOMMENDATIONS_ERR:
            return {
                ...state,
                loadingRecommendations: false,
                recomendations: [],
                errorRecommendations: true
            }
        default:
            return state
    }
};
  