import React from 'react';

import './Header.scss';
import MainNav from '../Navigation/MainNav';
import AuthNav from '../Navigation/AuthNav';

interface IHeaderProps {
}

const Header = (props: IHeaderProps) => {

  return (
    <header id="Header">
      <a href="/" className="home-link">

        <div className="main-logo">
          <i className="fas fa-globe"></i>
        </div>

        <div className="main-title">
          <span className="light">Parental Alienation </span>
          <span className="normal">Resources & Networking</span>
        </div>

      </a>

      <MainNav/>

      <div className="controls">
      </div>

      <AuthNav/>
    </header>
  )
}

export default Header;
