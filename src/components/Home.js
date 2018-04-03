import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemsSection from '../components/ItemsSection';
import PopularItemsSection from '../components/PopularItemsSection';

const Home = ({series,movies,home}) => (
    <Fragment>
        <ItemsSection title='Mi Lista' viewAllLink ='mylist' items={home.favorites} />
        <PopularItemsSection loading={movies.loading} viewAllLink='movies' items={movies.items} error={movies.error}>Películas más Populares</PopularItemsSection>
        <PopularItemsSection loading={series.loading} viewAllLink='series' items={series.items} error={series.error}>Series más Populares</PopularItemsSection>
    </Fragment>
);

export default Home;

Home.propTypes = {
    series : PropTypes.object,
    movies : PropTypes.object,
    home : PropTypes.object
};
