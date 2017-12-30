import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../../components/Category';
import { readLandCategory } from '../../actions';

class CategoryContainer extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.readLandCategory(params.category);
  }

  render() {
    return <Category Category={this.props.land} />;
  }
}

function mapStateToProps(state) {
  console.log('CategoryContainer State:', state);
  return {
    landList: state.land,
  };
}

export default connect(mapStateToProps, { readLandCategory })(CategoryContainer);
