import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderContent() {
    console.log(this.props);
    console.log(this.state);

    switch (this.props.auth) {
      case null:
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="2">
            <img src={this.props.auth.photo}
              alt={this.props.auth.firstname}
              className="circle" />
          </li>,
          <li key="1">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
}


  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Oracle</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="/new">Submit New POI</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
