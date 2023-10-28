import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";

interface INavItemProps {
  label: string;
  pathname?: string;
  callback?: Function;
}

const NavItem = (props: INavItemProps) => {
  const {label, pathname, callback} = props;
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (pathname) {
      return navigate(pathname);
    }
    if (callback) {
      callback()
    }
  }

  return (
    <div
      className={`NavItem ${location.pathname === pathname ? 'active' : 'inactive'}`}
      onClick={handleClick}
    >{label}</div>
  )
}

export default NavItem;
