import React from 'react';
import Proptypes from 'prop-types';

const Button = ({icon,type,active,children,onClick}) => {
    let styleButton = addStyleButton(type,active);
    return(
        <a onClick={onClick} className={styleButton} aria-label='Profile'>
            { icon && <i className={icon} aria-hidden='true'></i>} {children}
        </a>
    );
};

export default Button;

const addStyleButton = (type,active) => {
    let styleButton = 'btn';
    if(type === 'primary' || type === 'btn btn-primary'){
        styleButton = `${styleButton} btn-primary`;
    }
    if(type === 'secondary'){
        styleButton = `${styleButton} btn-secondary`;
    }
    if(type === 'light'){
        styleButton = `${styleButton} btn-light`;
    }
    if(type === 'outline-dark'){
        styleButton = `${styleButton} btn-outline-dark`;
    }
    if(active){
        styleButton = `${styleButton} active`;
    }
    return styleButton;
};

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



