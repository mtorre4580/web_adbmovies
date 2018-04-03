import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';

const Button = ({icon,type,active,children,onClick}) => (
    <a onClick={onClick} className={addClasses(type,active)} aria-label='Profile'>
        { icon && <i className={icon} aria-hidden='true'></i>} {children}
    </a>
);

export default Button;

const addClasses = (type,active) => cx({
    'btn' : true,
    'btn-primary' : type === 'primary',
    'btn-secondary' : type === 'secondary',
    'btn-light' : type === 'light',
    'btn-outline-dark' : type === 'outline-dark',
    'active' : active
});

Button.propTypes = {
    children : Proptypes.any,
    icon : Proptypes.string,
    type : Proptypes.string,
    active : Proptypes.bool,
    onClick : Proptypes.func
};

Button.defaultProps = {
    icon : null,
    type : 'btn btn-primary',
    active : false
};