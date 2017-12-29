import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class LandList extends Component {

  render() {

    console.log('LandList props:', this.props);

    if (this.props.landList instanceof Array) {
      return (
        <div>
          <table>
            <tr>
              <th>Title</th><th>X</th><th>Y</th><th>District</th>
            </tr>
            {this.props.landList.map(function (land, index) {
                  return (
                    <tr key={ land.id }>
                      <td><Link to={`/land/${land._id}`}>{land.title}</Link></td>
                      <td>{land.x}</td>
                      <td>{land.y}</td>
                      <td>{land.district}</td>
                    </tr>
                  );
                }
              )
            }
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
  console.log('LandList State:', state);
  return {
    landList: state.land,
  };
}

export default connect(mapStateToProps)(LandList);
