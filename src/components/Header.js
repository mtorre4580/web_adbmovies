import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchFormContainer from '../containers/SearchFormContainer';
import BadgeCount from '../components/BadgeCount';

export default class Header extends Component {

    render(){
        return(
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
                            <SearchFormContainer onSubmit={this.searching} /> 
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

    searching = ({search}) => this.props.history.push(`/search/${search}`);
  

}

 


