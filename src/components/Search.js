import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import PrimaryTitle from '../components/PrimaryTitle';
import Filter from '../components/Filter';
import FilterSearch from '../components/FilterSearch';
import NotifyError from '../components/NotifyError';
import ItemsSection from '../components/ItemsSection';

const totalItems = (items,type) => items.filter(i=> i.type === type).length;

const Search = ({items,loading,type,error,query,applyFilter,changeView}) => (
    <Fragment>
        <PrimaryTitle>Búsqueda > {query}</PrimaryTitle>
        { items.length > 0 && 
            <Filter onClickMode={changeView}>
                <FilterSearch totalMovies={totalItems(items,'movie')} totalSeries={totalItems(items,'tv')} onClickFilter={applyFilter} /> 
            </Filter>
        }
        { !error && <ItemsSection viewAllLink='series' loading={loading} items={items} type={type} /> }
        { error && <NotifyError>Se produjo un error en la búsqueda...</NotifyError>}
    </Fragment>
);

export default Search;

Search.propTypes = {
    items : Proptypes.array.isRequired,
    loading : Proptypes.bool.isRequired,
    type : Proptypes.string.isRequired,
    error : Proptypes.bool.isRequired,
    query : Proptypes.string,
    applyFilter : Proptypes.func,
    changeView : Proptypes.func

};

Search.defaultProps = {
    type : 'grid'
};