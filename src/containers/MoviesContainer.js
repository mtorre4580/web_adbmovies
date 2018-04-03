import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import SectionMoviesSeries from '../components/SectionMoviesSeries';
import ActionMovie from '../actions/ActionMovie';
import TheMovieDbApi from '../services/TheMovieDbApi';
import LocalStorageApi from '../services/LocalStorageApi';

const API = new TheMovieDbApi();

const mapStateToProps = state => ({...state.movies});

const applyFilter = e => dispatch => {
  let filter = e.target.id;
  let value = e.target.value;
  dispatch(ActionMovie.filterMoviesLoading());
  API.getMoviesByFilter(filter,value)
      .then(res => dispatch(ActionMovie.filterMoviesSuccess(res.data.results)))
      .catch(err => dispatch(ActionMovie.filterMoviesError(true))); 
}

const getPopularMovies = () => dispatch => {
  let movies = LocalStorageApi.getPopularMovies();
  movies.length === 0 ? getMovies(dispatch) : dispatch(ActionMovie.moviesSuccess(movies));
  setInterval( () => getMovies(dispatch), 600000);
}

const getMovies = dispatch => {
  dispatch(ActionMovie.moviesLoading());
  API.getPopularMovies().then(res => {
    let movies = res.data.results;
    LocalStorageApi.savePopularMovies(movies);
    dispatch(ActionMovie.moviesSuccess(movies));
  }).catch(err => dispatch(ActionMovie.moviesError(true)));
}

const changeView = type => dispatch => dispatch(ActionMovie.changeViewItem(type));

const addFavorite = movie => dispatch => {
  dispatch(ActionMovie.addFavorite(movie));
  LocalStorageApi.saveFavorite(movie);
}

const getGenres = () => dispatch => API.getGenresMovies().then(res => dispatch(ActionMovie.addGenres(res.data.genres))).catch(err => console.error(err));

export default compose(
    withRouter,
    connect(mapStateToProps, { getGenres, getPopularMovies, changeView, applyFilter, addFavorite }),
    lifecycle({
      componentDidMount () {
        this.props.getGenres();
        this.props.getPopularMovies(); 
      }
    })
)(SectionMoviesSeries);