//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link, withRouter } from 'react-router-dom';
import './style.css';

class Land extends Component {

  render() {

    console.log('Land props:', this.props);

    var adult = 'Family friendly content';
    if (this.props.land.adult) {
      adult = 'Adult content';
    }

    return (
      <div>
        <div className="page-header">
          <h1>{this.props.land.title}</h1>
        </div>
        <div>
          <p>Location: {this.props.land.x},{this.props.land.y}</p>
          <p>District: {this.props.land.district}</p>
          <p>{adult}</p>
          <p id="land_description">{this.props.land.description}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('Land State:', state);
  return {
    land: state.land,
  };
}

export default connect(mapStateToProps)(Land);
