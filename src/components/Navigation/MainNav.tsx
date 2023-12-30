import React from 'react';

import {useAppContext} from "../../context/AppContext";
import NavItem from './NavItem';

const MainNav = () => {
  const {isAuthenticated, currentUser} = useAppContext();

  return (
    <div className="Nav">
      <NavItem label="Resource Map" pathname="/" />
      {isAuthenticated ? (
        <NavItem label="My Resources" pathname={`/${currentUser.id}`} />
      ) : null}
      <NavItem label="About" pathname="/about" />
    </div>
  )
}

export default MainNav;
