import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../Header';
import LandCreateContainer from '../../containers/LandCreateContainer';
import LandContainer from '../../containers/LandContainer';
import CategoryContainer from '../../containers/CategoryContainer';
import Home from '../Home';
import SideBar from '../SideBar';

class App extends Component {

  componentDidMount() {
    this.props.readUser();
  }

  render() {
    return (
      <BrowserRouter>
      <div>

          <Header/>
          <div className="row">
            <div className="col-md-4">
              <SideBar/>
            </div>
            <div className="col-md-8">
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={LandCreateContainer} />
              <Route exact path="/land/:landId" component={LandContainer} />
              <Route exact path="/category/:category" component={CategoryContainer} />
            </div>
          </div>

      </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
