import React from 'react';
import Proptypes from 'prop-types';
import Progress from './Progress';

const Loading = ({children}) => (
    <section className='items-section'>
        <h5 className='items-section-title'>{children} <a href=''>Ver todas</a></h5>
        <Progress />
    </section>
);

export default Loading;

Loading.propTypes = {
    children : Proptypes.element
};
