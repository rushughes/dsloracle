import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../Header';
import LandCreateContainer from '../../containers/LandCreateContainer';

class App extends Component {

  componentDidMount() {
    this.props.readUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/land/create" component={LandCreateContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
