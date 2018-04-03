import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NotifiyProgress from './NotifyProgress';

const ItemDetail = ({detail,loading}) => (
    <Fragment>
        {loading && <NotifiyProgress>Obteniendo el detalle...</NotifiyProgress>}
        {!loading && 
            <div className='row'>
                <div className='col-md-4'>
                    <img src={`http://image.tmdb.org/t/p/w185${detail.poster_path}`} alt={detail.title ? detail.title : detail.name} className='img-fluid' />
                </div>
                <div className='col-md-8'>
                    <h1><span>{detail.title ? detail.title : detail.name}</span></h1>
                    <div>
                        <h3>Overview</h3>
                        <p>{detail.overview}</p>
                    </div>
                    <br />
                    <br/>
                    <br/>
                </div>
            </div>
        }
    </Fragment>
);

export default ItemDetail;

ItemDetail.propTypes = {
    detail : PropTypes.object.isRequired,
    loading : PropTypes.bool.isRequired
};
