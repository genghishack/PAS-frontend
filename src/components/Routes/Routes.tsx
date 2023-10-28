import React from 'react';
import {Route, Routes} from "react-router-dom";

import {UserRoute, GuestRoute, AdminRoute} from "./RouteLevels";
import NotFound from '../NotFound';
import About from "../About";
import AuthContainer from "../../containers/AuthContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import AdminContainer from '../../containers/AdminContainer';
import ResourceContainer from '../../containers/ResourceContainer';

const TopRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <ResourceContainer/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <GuestRoute path="/auth">
        <AuthContainer/>
      </GuestRoute>
      <UserRoute path="/profile">
        <ProfileContainer/>
      </UserRoute>
      <AdminRoute path="/admin">
        <AdminContainer/>
      </AdminRoute>
      <UserRoute path="/:userId" component={ResourceContainer}>
        {null}
      </UserRoute>
      <Route>
        <NotFound/>
      </Route>
    </Routes>
  )
}

export default TopRoutes;
