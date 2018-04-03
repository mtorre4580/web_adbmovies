import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import Home from '../components/Home';
import ActionMovie from '../actions/ActionMovie';
import ActionSerie from '../actions/ActionSerie';
import ActionHome from '../actions/ActionHome';
import TheMovieDbApi from '../services/TheMovieDbApi';
import LocalStorageApi from '../services/LocalStorageApi';

const API = new TheMovieDbApi();

const mapStateToProps = state => ({...state});

const getFavorites = () => dispatch => dispatch(ActionHome.favoritesSuccess(LocalStorageApi.getFavorites()));

const getPopularMovies = () => dispatch => {
    dispatch(ActionMovie.moviesLoading());
    API.getPopularMovies()
        .then(res => dispatch(ActionMovie.moviesSuccess(res.data.results)))
        .catch(err => dispatch(ActionMovie.moviesError(true)));
}

const getPopularSeries = () => dispatch => {
    dispatch(ActionSerie.seriesLoading());
    API.getPopularSeries()
        .then(res => dispatch(ActionSerie.seriesSuccess(res.data.results)))
        .catch(err => dispatch(ActionSerie.seriesError(true)));
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getFavorites, getPopularMovies, getPopularSeries }),
    lifecycle({
      componentDidMount () {
        this.props.getFavorites();
        this.props.getPopularMovies(); 
        this.props.getPopularSeries();
      }
    })
)(Home);