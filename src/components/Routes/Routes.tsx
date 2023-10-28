import React from 'react';
import {Route, Routes} from "react-router-dom";

import {UserRoute, GuestRoute, AdminRoute} from "./RouteLevels";
import NotFound from '../NotFound';
import About from "../About";
import AuthContainer from "../../containers/AuthContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import AdminContainer from '../../containers/AdminContainer';
import ResourceContainer from '../../containers/ResourceContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ResourceContainer/>} />
      <Route path="/about" element={<About/>} />
      {/*<GuestRoute path="/auth" element={<AuthContainer/>} />*/}
      {/*<UserRoute path="/profile">*/}
        {/*<ProfileContainer/>*/}
      {/*</UserRoute>*/}
      {/*<AdminRoute path="/admin">*/}
        {/*<AdminContainer/>*/}
      {/*</AdminRoute>*/}
      {/*<UserRoute path="/:userId" component={ResourceContainer}>*/}
        {/*{null}*/}
      {/*</UserRoute>*/}
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRoutes;
