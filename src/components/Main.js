import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import Movies from '../containers/MoviesContainer';
import Series from '../containers/SeriesContainer';
import MyList from '../containers/MyListContainer';
import Detail from '../containers/DetailContainer';
import Search from '../containers/SearchContainer';
import NotFound from '../components/NotFound';

const Main = () => (
    <main role='main'>
        <div className='py-5 bg-light'>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/movies' component={Movies} />
                    <Route path='/movies/:id' component={Detail} />
                    <Route exact path='/series' component={Series} />
                    <Route path='/series/:id' component={Detail} />
                    <Route path='/search/:query' component={Search} />
                    <Route path='/mylist' component={MyList} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </main>
);

export default Main;
