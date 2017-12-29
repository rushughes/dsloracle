import React, { Component } from 'react';
import HomeLandListContainer from '../../containers/HomeLandListContainer';

class Home extends Component {

  render() {

    return (
      <div>
        <h1>Welcome Home</h1>
        <HomeLandListContainer/>
      </div>
    );
  }
}

export default Home;
