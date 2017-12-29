import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../Header';
import LandCreateContainer from '../../containers/LandCreateContainer';
import LandContainer from '../../containers/LandContainer';

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
            <Route exact path="/new" component={LandCreateContainer} />
            <Route exact path="/land/:landId" component={LandContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
