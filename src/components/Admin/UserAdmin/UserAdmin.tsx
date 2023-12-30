import React, {useCallback, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {listRoles, listUsers} from "../../../libs/userLib";
import UserRow from "./UserRow";
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
      <header>User admin</header>
      <CreateUser getUserList={getUserList}/>
      <UserTable userList={userList}
                 getUserList={getUserList}
                 roles={roles}/>
    </div>
  )
}

export default UserAdmin;
