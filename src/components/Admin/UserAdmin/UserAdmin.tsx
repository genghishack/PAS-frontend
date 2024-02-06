import React, {useCallback, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {listRoles, listUsers} from "../../../lib/user";
import UserRow from "./UserTable/UserRow";
import CreateUser from "./CreateUser";
import UserTable from "./UserTable";

const UserAdmin = () => {
  const [userList, setUserList] = useState([]);
  const [roles, setRoles] = useState([]);

  const getUserList = async () => {
    const users = await listUsers('');
    setUserList(users.data);
  }

  const getRoles = async () => {
    const cognitoRoles = await listRoles('');
    setRoles(cognitoRoles.data);
  }

  useEffect(() => {
    getUserList().then();
    getRoles().then();
  }, [])

  return (
    <div className="UserAdmin">
      <div className="adminHeader">
        <div className="title">Administration: Users</div>
        <div className="controls">
          <CreateUser getUserList={getUserList}/>
        </div>
      </div>
      <UserTable userList={userList}
                 getUserList={getUserList}
                 roles={roles}/>
    </div>
  )
}

export default UserAdmin;
