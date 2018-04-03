import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import Filter from '../components/Filter';
import ItemsSection from '../components/ItemsSection';
import NotifyError from '../components/NotifyError';
import PrimaryTitle from '../components/PrimaryTitle';
import FilterMoviesSeries from '../components/FilterMoviesSeries';

const SectionMoviesSeries = ({title,items,genres,dates,orders,type,loading,error,changeView,applyFilter,addFavorite,detail}) =>{
   return(
    <Fragment>
        <PrimaryTitle>{title}</PrimaryTitle>
        <Filter onClickMode={changeView} type={type}>
            <FilterMoviesSeries filters={{dates:dates,orders:orders,genres:genres}} onChangeFilter={applyFilter} />
        </Filter>
        { !error && <ItemsSection viewAllLink={detail} loading={loading} items={items} type={type} onClick={addFavorite}/> }
        { error && <NotifyError>Se produjo un error al obtener las {title}</NotifyError> }
    </Fragment>
   );
};

export default SectionMoviesSeries;

SectionMoviesSeries.propTypes = {
    title : Proptypes.string,
    items : Proptypes.array.isRequired,
    genres : Proptypes.array.isRequired,
    dates : Proptypes.array.isRequired,
    type : Proptypes.string,
    loading : Proptypes.bool.isRequired,
    error : Proptypes.bool.isRequired,
    changeView : Proptypes.func,
    applyFilter : Proptypes.func,
    addFavorite : Proptypes.func,
    detail : Proptypes.string
};

SectionMoviesSeries.defaultProps = {

};

