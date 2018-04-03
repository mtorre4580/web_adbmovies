import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Section = ({title,link,children,showAll}) => {
    return <section className='items-section'>
    {title && <h5 className='items-section-title'>{title} {showAll && <NavLink to={link}>Ver todas</NavLink>} </h5>} 
    <div className='items-section-body'>
        <div className='row'>
            {children}
        </div>
    </div>
</section>;
}

export default Section;

Section.propTypes = {
    title : Proptypes.string,
    link : Proptypes.string,
    children : Proptypes.any,
    showAll : Proptypes.bool
};

Section.defaultProps = {

};

