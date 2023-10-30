import React from "react";

import {useProfileContext} from "../../context/ProfileContext";
import LoaderButton from "../LoaderButton/LoaderButton";

import './Profile.scss';
import {useAppContext} from "../../context/AppContext";

const Profile = () => {
  const {currentUser} = useAppContext();
  const {profilePhaseTransition} = useProfileContext();

  const {name, email, roles} = currentUser;

  const rolesDisplay = roles.join(', ');

  return (
    <div className="Profile">
      <header>User profile</header>
      <div className="userAttributeRow">
        <div className="userAttribute">
          <div className="attrName">Email:</div>
          <div className="attrValue">{email}</div>
        </div>
          {/*@ts-ignore*/}
          <LoaderButton onClick={() => profilePhaseTransition('email')}>
            Change Email
          </LoaderButton>
      </div>

      <div className="userAttributeRow">
        <div className="userAttribute">
          <div className="attrName">Name:</div>
          <div className="attrValue">{name}</div>
        </div>
          {/*@ts-ignore*/}
          <LoaderButton onClick={() => profilePhaseTransition('name')}>
            Change Name
          </LoaderButton>
      </div>

      <div className="userAttributeRow">
        <div className="userAttribute">
          <div className="attrName">Roles:</div>
          <div className="attrValue">{rolesDisplay}</div>
        </div>
      </div>

      <div className="userAttributeRow">
          {/*@ts-ignore*/}
          <LoaderButton block={true} onClick={() => profilePhaseTransition('password')}>
            Change Password
          </LoaderButton>
      </div>

    </div>
  );
}

export default Profile;
