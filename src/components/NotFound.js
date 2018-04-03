import React from 'react';
import NotifyError from './NotifyError';
import Proptypes from 'prop-types';

const NotFound = ({location}) => <NotifyError>No se encontró la página {location.pathname}</NotifyError>

export default NotFound;

NotFound.propTypes = {
    location : Proptypes.object
};