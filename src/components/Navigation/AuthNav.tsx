import React from 'react';
import {useNavigate} from "react-router-dom";
import {Auth} from "aws-amplify";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

import {useAppContext} from "../../context/AppContext";

import './AuthNav.scss';
import {defaultUserObj} from "../../types/user";

const AuthNav = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, isAdmin, currentUser, setCurrentUser } = useAppContext();

  const navigateTo = (destination) => {
    navigate(`/${destination}`);
  }

  const handleLogout = async () => {
    await Auth.signOut()
    setIsAuthenticated(false);
    setCurrentUser(defaultUserObj);
    navigate('/');
  }

  const getUserDisplayName = () => {
    let userDisplayName = '';
    if (currentUser.id) {
      userDisplayName = currentUser.email;
      if (currentUser.name) {
        userDisplayName = currentUser.name;
      }
    }
    return userDisplayName;
  }

  return (
    <div className="AuthNav">
      {isAuthenticated ? (
        <>
          <Dropdown>
            <DropdownButton
              className="UserMenu"
              title={getUserDisplayName()}
              variant="link"
            >
              {isAdmin ? (
                <DropdownItem onClick={() => navigateTo('admin')}>
                  Admin Tools
                </DropdownItem>
              ) : null}
              <DropdownItem onClick={() => navigateTo('profile')}>
                Profile
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                Logout
              </DropdownItem>
            </DropdownButton>
          </Dropdown>
        </>
      ) : (
        <Button
          variant="link"
          onClick={() => navigateTo('auth')}
        >Login</Button>
      )}
    </div>
  )
}

export default AuthNav;
