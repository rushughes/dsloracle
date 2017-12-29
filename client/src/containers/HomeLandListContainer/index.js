import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readLand } from '../../actions';
import { Link } from 'react-router-dom';
import LandList from '../../components/LandList';
import { readAllLand } from '../../actions';

class HomeLandListContainer extends Component {
  componentDidMount() {
    this.props.readAllLand();
  }

  render() {
    return <LandList landList={this.props.land} />;
  }
}

function mapStateToProps(state) {
  console.log('HomeLandListContainer State:', state);
  return {
    landList: state.land,
  };
}

export default connect(mapStateToProps, { readAllLand })(HomeLandListContainer);
