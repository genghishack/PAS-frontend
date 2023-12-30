import React from 'react';
import UserRow from "./UserRow";
import {Table} from "react-bootstrap";

interface IUserTable {
  userList: any[];
  getUserList: Function;
  roles: any[];
}

const UserTable = (props: IUserTable) => {
  const {userList, getUserList, roles} = props;

  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Role(s)</th>
        <th>Status</th>
        <th>Enabled</th>
      </tr>
      </thead>
      <tbody>
      {userList.map((user: any) => (
        <UserRow
          key={user.id}
          initialUserData={user}
          getUserList={getUserList}
          roles={roles}
        />
      ))}
      </tbody>
    </Table>
  )
}

export default UserTable;
