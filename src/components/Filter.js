import React from 'react';
import Proptypes from 'prop-types';
import Button from './Button';

const Filter = ({children,onClickMode,type}) => (
    <div className='filters-bar'>
        {children}
        <div className='filters-bar-right'>
            <Button onClick={ e => onClickMode('grid')} active={type === 'grid'} icon='mdi mdi-view-grid' type='light' />
            <Button onClick={ e => onClickMode('list')} active={type === 'list'} icon='mdi mdi-view-list' type='light' />
        </div>
    </div>
);

export default Filter;

Filter.propTypes = {
    children : Proptypes.element,
    onClickMode : Proptypes.func,
    type: Proptypes.string
};

Filter.defaultProps = {
    type: 'list'
};

