export default class LocalStorageApi {    

    static getFavorites(){
        let favorites = localStorage.getItem(KEY_FAVORITES);
        return favorites ? parseFavorites(JSON.parse(favorites)) : [];
    }

    static saveFavorite(favorite){
        let favorites = this.getFavorites();
        if(!exists(favorites,favorite)){
            favorites.push(favorite);
            this.saveFavorites(favorites);
        }
    }

    static saveFavorites(favorites){
        localStorage.setItem(KEY_FAVORITES,JSON.stringify(favorites));
    }

    static filterFavorite(idFavorite){
        return this.getFavorites().filter(f=>f.id !==idFavorite);
    }

    static getPopularMovies(){
        let movies = localStorage.getItem(KEY_POPULAR_MOVIES);
        return movies ? JSON.parse(movies) : [];
    }

    static savePopularMovies(movies){
        localStorage.setItem(KEY_POPULAR_MOVIES,JSON.stringify(movies));
    }

    static getPopularSeries(){
        let series = localStorage.getItem(KEY_POPULAR_SERIES);
        return series ? JSON.parse(series) : [];
    }

    static savePopularSeries(series){
        localStorage.setItem(KEY_POPULAR_SERIES,JSON.stringify(series));
    }

}

const exists = (items,item) =>{
    if(items.length > 0){
        return items.find(i => i.id === item.id) ? true : false;
    }
    return false;
}

const parseFavorites = favorites => {
    return favorites.map(f=> {
        if(f.viewed === undefined){
            f.viewed = false;
        }
        return f;
    });
}

const KEY_FAVORITES = 'favorites';
const KEY_POPULAR_MOVIES = 'movies_popular';
const KEY_POPULAR_SERIES = 'series_popular';