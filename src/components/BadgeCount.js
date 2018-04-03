import React from 'react';
import PropTypes from 'prop-types';
import LocalStorageAPI from '../services/LocalStorageApi';

const BadgeCount = ({total}) => <span className='badge badge-danger'>{total}</span> ;

export default BadgeCount;

BadgeCount.propTypes = {
    total : PropTypes.number.isRequired
};

BadgeCount.defaultProps = {
    total: LocalStorageAPI.getFavorites().length
};