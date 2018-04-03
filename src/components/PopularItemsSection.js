import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import ItemsSection from './ItemsSection';
import NotifyError from './NotifyError';

const PopularItemsSection = ({children,loading,items,error,viewAllLink}) => (
    <Fragment>
        {!error && <ItemsSection title={children} viewAllLink={viewAllLink} showAll={true} loading={loading} items={items} />}
        {error && <NotifyError>Se produjo un error al obtener los datos</NotifyError>}
    </Fragment>
);

export default PopularItemsSection;

PopularItemsSection.propTypes = {
    children : Proptypes.string,
    loading : Proptypes.bool.isRequired,
    items : Proptypes.array.isRequired,
    error : Proptypes.bool.isRequired,
    viewAllLink : Proptypes.string
};

PopularItemsSection.defaultProps = {
    viewAllLink : ''
}