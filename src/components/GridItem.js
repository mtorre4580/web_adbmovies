import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const GridItem = ({item,link,props}) => (
    <article className='col-md-2'>
        <NavLink className='grid-item' to={link !== undefined ? `${link}/${item.id}` : `${item.id}`}>
            <img src={item.img ? item.img : 'http://via.placeholder.com/200x200'} alt={item.title} className='img-fluid' />
            <span className='grid-item-body'>
                <span className='grid-item-title'>{item.title}</span>
                <span className='grid-item-date'>{item.date}</span>
            </span>
        </NavLink> 
    </article>
);


export default GridItem;

GridItem.propTypes = {
    item : PropTypes.object.isRequired,
    link : PropTypes.string
};

GridItem.defaultProps = {
   
};