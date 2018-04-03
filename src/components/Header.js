import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, NavLink } from 'react-router-dom';
import { push } from 'react-router-redux';
import SearchFormContainer from '../containers/SearchFormContainer';
import BadgeCount from '../components/BadgeCount';

const Header = ({searching}) => (
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <NavLink className='navbar-brand' exact to='/'>React Movie DB APP</NavLink> 
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample07' aria-controls='navbarsExample07' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarsExample07'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' exact to='/'>Home</NavLink> 
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/movies'>Peliculas</NavLink> 
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/series'>Series</NavLink> 
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/mylist'>Mi Lista <BadgeCount/> </NavLink> 
                        </li>
                    </ul>
                    <SearchFormContainer onSubmit={searching} /> 
                </div>
            </div>
        </nav>
    </header>
);

const searching = ({search}) => dispatch => dispatch(push(`/search/${search}`));

export default compose(withRouter, connect(state => ({...state}), { searching }))(Header);

Header.propTypes = {
    searching : PropTypes.func
};



