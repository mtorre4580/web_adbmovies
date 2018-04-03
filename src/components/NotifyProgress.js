import React from 'react';
import Proptypes from 'prop-types';

const NotifiyProgress = ({children}) => (
    <p>{children}</p>
);

export default NotifiyProgress;

NotifiyProgress.propTypes = {
    children : Proptypes.any
};

NotifiyProgress.defaultProps = {
    children : 'Cargando'
};