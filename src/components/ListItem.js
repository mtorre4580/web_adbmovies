import React from 'react';
import Proptypes from 'prop-types';

const ListItem = ({item,children}) => (
    <article className='col-md-6'>
        <div className='list-item'>
            <div className='list-item-img'>
                <img src={item.img ? item.img : 'http://via.placeholder.com/200x200'} alt={item.title} className='img-fluid' />
            </div>
            <div className='list-item-body'>
                <h3 className='list-item-title'>{item.title}</h3>
                <div className='list-item-description'>
                    <p>{item.description}</p>
                </div>
                <div className='list-item-actions'>
                    {children}
                </div>
            </div>
        </div>
    </article>
);

ListItem.propTypes = {
    item : Proptypes.object,
    children : Proptypes.any,
};

export default ListItem;

