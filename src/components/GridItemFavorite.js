import React from 'react';
import PropTypes from 'prop-types';

const GridItemFavorite = ({item,children}) =>(
    <article className='col-md-2'>
        <div className='grid-item'>
            <img src={item.img} alt={item.title} className='img-fluid' />
            <div className='grid-item-body'>
                <span className='grid-item-title'>{item.title}</span>
                <span className='grid-item-date'>{item.date}</span>
                <div className='grid-item-actions'>
                   {children}
                </div>
            </div>
        </div>
    </article>
);

export default GridItemFavorite;

GridItemFavorite.propTypes = {
    item : PropTypes.object,
    children : PropTypes.any
};

GridItemFavorite.defaultProps = {
    
};