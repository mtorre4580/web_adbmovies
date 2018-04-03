import * as types from '../constants/ActionTypes';

export default class ActionDetail {

    static loadingDetail = () => ({type: types.LOADING_DETAIL});

    static loadingDetailSuccess = detail => ({type: types.LOADING_DETAIL_SUCCESS, detail});

    static loadingDetailError = errorDetail => ({type: types.LOADING_DETAIL_ERR, errorDetail});

    static loadingRecommendations = () => ({type: types.LOADING_RECOMMENDATIONS});

    static loadingRecommendationsSuccess = recommendations => ({type: types.LOADING_RECOMMENDATIONS_SUCCESS, recommendations});

    static loadingRecommendationsError = errorRecommendations => ({type: types.LOADING_RECOMMENDATIONS_ERR, errorRecommendations});

}