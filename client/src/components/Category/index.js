//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Category extends Component {

  render() {

    console.log('Category props:', this.props);

    if (this.props.landList instanceof Array) {
      return (
        <div>
          <table>
            <thead>
            <tr>
              <th>Title</th><th>X</th><th>Y</th><th>District</th>
            </tr>
          </thead>
            <tbody>
              {this.props.landList.map(function (land, index) {
                    return (
                      <tr key={ land._id }>
                        <td><Link to={`/land/${land._id}`}>{land.title}</Link></td>
                        <td>{land.x}</td>
                        <td>{land.y}</td>
                        <td>{land.district}</td>
                      </tr>
                    );
                  }
                )
              }
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>No data {this.props.landList}</div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log('Category State:', state);
  return {
    landList: state.land,
  };
}

export default connect(mapStateToProps)(Category);
