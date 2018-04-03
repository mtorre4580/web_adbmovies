import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import PrimaryTitle from '../components/PrimaryTitle';
import ItemsFavorite from '../components/ItemsFavorite';
import Filter from '../components/Filter';
import FilterFavorites from '../components/FilterFavorites';

const MyList = ({changeView,applyFilter,items,type,removeFavorite,setViewed}) => (
    <Fragment>
        <PrimaryTitle>Mi Lista</PrimaryTitle>
        <Filter onClickMode={changeView} type={type}>
            <FilterFavorites filters={[{value:false,name:'No Vistas'},{value: true,name:'Vistas'}]} onChangeFilter={applyFilter} />
        </Filter>
        <ItemsFavorite items={items} type={type} onClickDelete={removeFavorite} onClickViewed={setViewed} />
    </Fragment>
);

export default MyList;

MyList.propTypes = {
    changeView : Proptypes.func,
    applyFilter : Proptypes.func,
    items : Proptypes.array,
    type : Proptypes.string,
    removeFavorite : Proptypes.func,
    setViewed : Proptypes.func
};
