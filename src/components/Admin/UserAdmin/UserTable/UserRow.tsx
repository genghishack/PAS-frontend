import React, { useState } from 'react';

import UserEnabledCell from "./UserEnabledCell";
import UserEmailCell from "./UserEmailCell";
import UserRolesCell from "./UserRolesCell";
import UserNameCell from "./UserNameCell";
import {useAppContext} from "../../../../context/AppContext";

interface IUserRow {
  initialUserData: any;
  getUserList: Function;
  roles: string[];
}

const UserRow = (props: IUserRow) => {
  const {currentUser, setCurrentUser} = useAppContext();
  const {initialUserData, getUserList, roles} = props;
  const [user, setUser] = useState(initialUserData);

  const updateUser = (userData) => {
    if (currentUser.id === userData.id) {
      setCurrentUser(userData);
    }
    setUser(userData);
  }

  return (
    <tr className="UserRow">
      <td>
        <UserEmailCell user={user}/>
      </td>
      <td>
        <UserNameCell user={user} setUser={updateUser}/>
      </td>
      <td>
        <UserRolesCell
          user={user}
          setUser={updateUser}
          roles={roles}
        />
      </td>
      <td>{user.status}</td>
      <td>
        <UserEnabledCell
          user={user}
          setUser={updateUser}
          getUserList={getUserList}
        />
      </td>
    </tr>
  )
}

export default UserRow;
