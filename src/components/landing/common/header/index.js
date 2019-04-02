import React from 'react';

import './header.css'

import logo from './../../../../assets/img/FL_Logotype_Purple.png';

class Header extends React.Component {
  
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="icon-container">
            <img src={logo}
                 alt="Firstleaf Logo"
                 className="logo-img header-logo"
            />
          </div>
          <div className="get-started-button-header">
            <button 
              className="cta-btn"
              onClick={this.props.openModal}>
              GET STARTED
            </button>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;