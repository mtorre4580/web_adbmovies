import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header {...this.props}/>
        <Main /> 
      </Fragment>
    );
  }

}

export default withRouter(connect(null, { replace })(App));
