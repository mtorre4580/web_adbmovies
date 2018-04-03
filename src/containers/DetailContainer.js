import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import Detail from '../components/Detail';
import ActionDetail from '../actions/ActionDetail';
import TheMovieDbApi from '../services/TheMovieDbApi';

const API = new TheMovieDbApi();

const mapStateToProps = (state,ownProps) => {
    let path = ownProps.location.pathname;
    return path.includes('movies') ? {...state.detail, type:'movie'} : {...state.detail, type:'tv'};
}

const getDetail = (type,id) => dispatcher => {
    dispatcher(ActionDetail.loadingDetail());
    API.getDetail(type,id)
        .then(res => dispatcher(ActionDetail.loadingDetailSuccess(res.data)))
        .catch(err => dispatcher(ActionDetail.loadingDetailError(true)));
};

const getRecommendations = (type,id) => dispatcher => {
    dispatcher(ActionDetail.loadingRecommendations());
    API.getRecommendations(type,id)
        .then(res => dispatcher(ActionDetail.loadingRecommendationsSuccess(res.data.results)))
        .catch(err => dispatcher(ActionDetail.loadingRecommendationsError(true)));
};

export default compose(
    withRouter,
    connect(mapStateToProps, { getDetail, getRecommendations }),
    lifecycle({
      componentDidMount () {
        this.props.getDetail(this.props.type,this.props.match.params.id);
        this.props.getRecommendations(this.props.type,this.props.match.params.id);
      },
      componentWillUpdate (nextProps, nextState) {
        let id = nextProps.match.params.id;
        if(this.props.match.params.id !== id){
            this.props.getDetail(this.props.type,id);
            this.props.getRecommendations(this.props.type,id);
          return true;
        }
        return false;
      }
    })
)(Detail);