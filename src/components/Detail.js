import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import ItemsSection from '../components/ItemsSection';
import NotifyError from '../components/NotifyError';
import ItemDetail from '../components/ItemDetail';

const Detail = ({errorDetail,errorRecommendations,loadingRecommendations,loadingDetail,detail,recomendations}) => (
    <Fragment>
        {!errorDetail && <ItemDetail detail={detail} loading={loadingDetail} /> }
        {errorDetail && <NotifyError>Se produjo un error al obtener el detalle</NotifyError>}
        {!errorRecommendations && <ItemsSection title='Recomendaciones' loading={loadingRecommendations} items={recomendations.splice(0,6)} />}
        {errorRecommendations && <NotifyError>Se produjo un error al obtener las recomendaciones...</NotifyError>}
    </Fragment>
);    

Detail.propTypes = {
    errorDetail : Proptypes.bool,
    errorRecommendations : Proptypes.bool,
    loadingRecommendations : Proptypes.bool.isRequired,
    detail : Proptypes.object,
    recomendations : Proptypes.array
};

Detail.defaultProps = {
    detail : {},
    recomendations : []
};

export default Detail;
