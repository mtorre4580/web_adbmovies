import React from 'react';
import Proptypes from 'prop-types';

const FilterFavorites = ({filters,onChangeFilter})=>(
    <div className='filters-bar-left'>
        <select onChange={onChangeFilter} name='filter-viewed' id='filter-year' className='form-control'>
            {filters.map(f => <option key={f.value} value={f.value}>{f.name}</option>)}
        </select>
    </div>
);

export default FilterFavorites;

FilterFavorites.propTypes = {
    filters : Proptypes.array,
    onChangeFilter : Proptypes.func
};

FilterFavorites.defaultProps = {

};