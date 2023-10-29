import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import NotFound from '../NotFound';
import About from "../About";
import AuthContainer from "../../containers/AuthContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import AdminContainer from '../../containers/AdminContainer';
import ResourceContainer from '../../containers/ResourceContainer';
import {useAppContext} from "../../context/AppContext";

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const AppRoutes = () => {
  const { isAuthenticated, isAdmin } = useAppContext();
  const { pathname, search } = useLocation();
  const redirect = querystring("redirect");
  return (
    <Routes>
      <Route path="/" element={<ResourceContainer/>} />
      <Route path="/about" element={<About/>} />
      {/* Was GuestRoute */}
      <Route path="/auth"
             element={(isAuthenticated) ? (
               <Navigate replace to={redirect === "" || redirect === null ? "/" : redirect} />
             ) : <AuthContainer/>}
      />
      {/* Was UserRoute */}
      <Route path="/profile"
             element={(isAuthenticated) ? <ProfileContainer/> : (
               <Navigate replace to={`/auth?redirect=${pathname}${search}`} />
             )}
      />
      {/* Was AdminRoute */}
      <Route path="/admin"
             element={(isAuthenticated && isAdmin) ? <AdminContainer/> : (
               <Navigate replace to={`/auth?redirect=${pathname}${search}`} />
             )}
      />
      {/* Was UserRoute */}
      <Route path="/:userId"
             element={(isAuthenticated) ? <ResourceContainer/> : (
               <Navigate replace to={`/auth?redirect=${pathname}${search}`} />
             )} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRoutes;
