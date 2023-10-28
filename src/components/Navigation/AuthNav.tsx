import React from 'react';
import {useNavigate} from "react-router-dom";
import {Auth} from "aws-amplify";
import {connect} from "react-redux";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

import {useAppContext} from "../../context/AppContext";
import {setCurrentUser} from "../../redux/actions/currentUser";

import './AuthNav.scss';

interface IAuthNav {
  dispatch: Function;
  currentUser: any;
}

const AuthNav = (props: IAuthNav) => {
  const {dispatch, currentUser} = props;

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, isAdmin } = useAppContext();

  const navigateTo = (destination) => {
    navigate(`/${destination}`);
  }

  const handleLogout = async () => {
    await Auth.signOut()
    setIsAuthenticated(false);
    dispatch(setCurrentUser({}));
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  }
}

export default connect(mapStateToProps)(AuthNav);
