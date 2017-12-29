import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readLand } from '../../actions';
//import { Link } from 'react-router-dom';
import Land from '../../components/Land';

class LandContainer extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.readLand(params.landId);
  }

  render() {
    return <Land land={this.props.land} />;
  }
}

function mapStateToProps({ land }) {
  return { land };
}

export default connect(mapStateToProps, { readLand })(LandContainer);
