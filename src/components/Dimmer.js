import React from 'react';
import Proptypes from 'prop-types';
import Loading from './Loading';

const Dimmer = ({children}) => (
    <div className='py-5 bg-light'>
        <div className='container'>
            <Loading>{children}</Loading>
        </div>
    </div>
);

export default Dimmer;

Loading.propTypes = {
    children : Proptypes.string.isRequired
};

Loading.defaultProps = {
    children : ''
};

