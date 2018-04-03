import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import Search from '../components/Search';
import ActionSearch from '../actions/ActionSearch';
import TheMovieDbApi from '../services/TheMovieDbApi';

const API = new TheMovieDbApi();

const mapStateToProps = (state,ownProps) => ({...state.search, query: ownProps.match.params.query});

const search = query => dispatch => {
    dispatch(ActionSearch.loadingSearch());
    API.getSearch(query)
        .then(res => dispatch(ActionSearch.loadingSearchSuccess(res.data.results)))
        .catch(err => dispatch(ActionSearch.loadingSearchErr(true)));
}

const applyFilter = by => dispatch => dispatch(ActionSearch.filterResultsSearch(by));

const changeView = type => dispatch => dispatch(ActionSearch.changeViewItem(type));

export default compose(
    withRouter,
    connect(mapStateToProps, { search, applyFilter, changeView }),
    lifecycle({
      componentDidMount () {
        this.props.search(this.props.match.params.query);
      }
    })
)(Search);