import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SectionTitle = ({title,link,children}) => (
    <section className='items-section'>
        <h5 className='items-section-title'> {title} {link && <NavLink to={link}>Ver todas</NavLink>} </h5>
        <div className='items-section-body'>
            <div className='dimmer'>
                {children}
            </div>
        </div>
    </section>
);

export default SectionTitle;

SectionTitle.propTypes = {
    title : Proptypes.string,
    link : Proptypes.string,
    children : Proptypes.string
};

SectionTitle.defaultProps = {
    title : ''
};

