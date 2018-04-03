import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import MyList from '../components/MyList';
import ActionMyList from '../actions/ActionMyList';
import LocalStorageApi from '../services/LocalStorageApi';

const mapStateToProps = state => ({...state.mylist});

const loadFavorites = () => dispatch => dispatch(ActionMyList.loadFavorites(LocalStorageApi.getFavorites()));

const applyFilter = e => dispatch => {
    let viewed = (e.target.value === 'true');
    let favoritesFilter = LocalStorageApi.getFavorites().filter(i => i.viewed === viewed);
    dispatch(ActionMyList.loadFavorites(favoritesFilter));
}

const setViewed = favorite => dispatch => dispatch(ActionMyList.updateFavorite(favorite));

const changeView = type => dispatch => dispatch(ActionMyList.changeViewItem(type));

const removeFavorite = id => dispatch => {
    let favoritesFilter = LocalStorageApi.filterFavorite(id);
    LocalStorageApi.saveFavorites(favoritesFilter);
    dispatch(ActionMyList.loadFavorites(favoritesFilter));
}

export default compose(
    withRouter,
    connect(mapStateToProps, { loadFavorites, applyFilter, setViewed, changeView, removeFavorite }),
    lifecycle({
      componentDidMount () {
        this.props.loadFavorites();
      }
    })
)(MyList);