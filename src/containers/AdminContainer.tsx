import React, {useState} from 'react';

import {AdminContext} from "../context/AdminContext";
import UserAdmin from "../components/Admin/UserAdmin/UserAdmin";
import CategoryAdmin from "../components/Admin/CategoryAdmin/CategoryAdmin";
import ProfessionalAdmin from "../components/Admin/ProfessionalAdmin/ProfessionalAdmin";

import './Admin.scss';
import AdminMenu from "../components/Admin/AdminMenu";
import {defaultCategoryObj} from "../types/App";

const AdminContainer = () => {
  const [adminPhase, setAdminPhase] = useState('');
  const [currentCategory, setCurrentCategory] = useState(defaultCategoryObj)

  const adminPhaseTransition = (phase) => {
    setAdminPhase(phase);
  }

  const renderAdminPhase = () => {
    switch (adminPhase) {
      case 'user':
        return <UserAdmin/>;
      case 'category':
        return <CategoryAdmin/>;
      case 'professional':
        return <ProfessionalAdmin/>
      default:
        return (
          <div>Choose an admin panel</div>
        )
    }
  }

  return (
    <div className="Admin AdminContainer">
      <AdminContext.Provider value={{
        adminPhaseTransition,
      }}>
        <AdminMenu/>
        <div className="AdminContent">
          {renderAdminPhase()}
        </div>
      </AdminContext.Provider>
    </div>
  )
}

export default AdminContainer;
