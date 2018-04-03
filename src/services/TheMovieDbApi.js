import axios from 'axios';

export default class TheMovieDbApi {

    constructor() {
        this.axios = axios.create({baseURL: BASE_URL, params: { api_key: API_KEY, language: 'es-AR'} });
        this.axios.interceptors.response.use(response => {
            let res = Object.assign({},response);
            if(response.data.results){
                res.data.results = parseItems(response.data.results);
            }
            return res;
          }, error => Promise.reject(error));
    }

    getPopularMovies = (page = 1) => this.axios.get('/movie/popular', { params: { page: page } });

    getPopularSeries = (page = 1) => this.axios.get('/tv/popular', { params: { page: page } });

    getGenresMovies = () => this.axios.get('/genre/movie/list');

    getGenresSeries = () => this.axios.get('/genre/tv/list');

    getMoviesByFilter = (filter,value) => {
        let params = {};
        if(filter.includes('sort'))
            params.sort_by = value
        if(filter.includes('genre'))
            params.with_genres = value;
        if(filter.includes('year'))
            params.primary_release_year = value;
        return this.axios.get('/discover/movie', { params: params });
    }

    getSeriesByFilter = (filter,value) => {
        let params = {};
        if(filter.includes('sort'))
            params.sort_by = value
        if(filter.includes('genre'))
            params.with_genres = value;
        if(filter.includes('year'))
            params.air_date = value;
        return this.axios.get('/discover/tv',{ params: params });
    }

    getDetail = (type,id) => this.axios.get(`/${type}/${id}`);

    getRecommendations = (type,id) => this.axios.get(`/${type}/${id}/recommendations`);

    getSearch = query => this.axios.get('search/multi', { params: { query : query} });

}

const API_KEY = '794ceead3773c721110902a178f4da09';
const BASE_URL = 'https://api.themoviedb.org/3';

const parseItems = items => items.map(r => ({
    title : r.original_title ? r.original_title : r.original_name,
    img : r.poster_path ? `http://image.tmdb.org/t/p/w185${r.poster_path}` : null,
    description : r.overview,
    date : r.release_date ? r.release_date : r.first_air_date,
    id : r.id,
    type : r.media_type ? r.media_type : null
}));