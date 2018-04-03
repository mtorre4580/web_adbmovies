import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import SectionMoviesSeries from '../components/SectionMoviesSeries';
import ActionSerie from '../actions/ActionSerie';
import TheMovieDbApi from '../services/TheMovieDbApi';
import LocalStorageApi from '../services/LocalStorageApi';

const API = new TheMovieDbApi();

const mapStateToProps = state => ({...state.series});

const getGenres = () => dispatch => API.getGenresSeries().then(res => dispatch(ActionSerie.addGenres(res.data.genres))).catch(err => console.error(err));

const applyFilter = e => dispatch => {
    let filter = e.target.id;
    let value = e.target.value;
    dispatch(ActionSerie.filterSeriesLoading());
    API.getSeriesByFilter(filter,value)
        .then(res => dispatch(ActionSerie.filterSeriesSuccess(res.data.results)))
        .catch(err => dispatch(ActionSerie.filterSeriesError(true))); 
}
  
const getPopularSeries = () => dispatch => {
    let series = LocalStorageApi.getPopularSeries();
    series.length === 0 ? getSeries(dispatch) : dispatch(ActionSerie.seriesSuccess(series));
    setInterval( () => getSeries(dispatch), 600000);
}

const getSeries = dispatch => {
    dispatch(ActionSerie.seriesLoading());
    API.getPopularSeries().then(res => {
        let series = res.data.results;
        LocalStorageApi.savePopularSeries(series);
        dispatch(ActionSerie.seriesSuccess(series));
    }).catch(err => dispatch(ActionSerie.seriesError(true)));
}

const changeView = type => dispatch => dispatch(ActionSerie.changeViewItem(type));

const addFavorite = serie => dispatch => {
    dispatch(ActionSerie.addFavorite(serie));
    LocalStorageApi.saveFavorite(serie);
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getGenres, getPopularSeries, changeView, applyFilter, addFavorite }),
    lifecycle({
      componentDidMount () {
        this.props.getGenres();
        this.props.getPopularSeries(); 
      }
    })
)(SectionMoviesSeries);