import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class App extends Component {

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default connect(null, actions)(App);
