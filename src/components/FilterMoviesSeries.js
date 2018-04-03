import React from 'react';
import Proptypes from 'prop-types';

const FilterMoviesSeries  = ({filters,onChangeFilter})=>(
    <div className='filters-bar-left'>
        <select onChange={onChangeFilter} name='filter-year' id='filter-year' className='form-control'>
            {filters.dates.map(d => <option key={d}>{d}</option>)}
        </select>
        <select onChange={onChangeFilter} name='filter-sort' id='filter-sort' className='form-control'>
            {filters.orders.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
        </select>
        <select onChange={onChangeFilter} name='filter-genre' id='filter-genre' className='form-control'>
            {filters.genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
        </select>
    </div>
);

export default FilterMoviesSeries;


FilterMoviesSeries.propTypes = {
    filters : Proptypes.object,
    onChangeFilter : Proptypes.func
};

FilterMoviesSeries.defaultProps = {

};