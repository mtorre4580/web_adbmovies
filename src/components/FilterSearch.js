import React from 'react';
import Proptypes from 'prop-types';
import Button from './Button';

const FilterSearch = ({totalMovies,totalSeries,onClickFilter}) =>(
    <div className='filters-bar-left'>
        <Button type='outline-dark' onClick={()=>onClickFilter('movie')}>
            Películas {totalMovies}
        </Button>
        <Button type='outline-dark' onClick={()=>onClickFilter('tv')}>
            Series {totalSeries}
        </Button>
    </div>
);

export default FilterSearch;

FilterSearch.propTypes = {
    totalMovies : Proptypes.number,
    totalSeries : Proptypes.number,
    onClickFilter : Proptypes.func,
};

FilterSearch.defaultProps = {
    totalMovies : 0,
    totalSeries : 0
};