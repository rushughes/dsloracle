import React, { Component } from 'react';
import './style.css';

class SideBar extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted"><a href="https://github.com/rushughes/dsloracle/">Github</a></span>
        </div>
      </footer>
    );
  }
}

export default SideBar;
