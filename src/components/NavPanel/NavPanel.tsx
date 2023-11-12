import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { useResourceContext } from '../../context/ResourceContext';
import NavItem from "./NavItem";

import './NavPanel.scss';
import {useAppContext} from "../../context/AppContext";

interface INavPanel {
  resources: any;
  userId: string | null;
}

const NavPanel = (props: INavPanel) => {
  const {resources, userId} = props;
  const {professionals, categories, setShowAddResourceModal} = useResourceContext();

  const handleAddClick = async () => {
    setShowAddResourceModal(true);
  }

  return (
    <div className="NavPanel">
      <div className="navHeader">
        <header>Browse by Category</header>
        {userId ? (
          <div className="navControls">
            <FontAwesomeIcon
              className="control add"
              icon={faPlusSquare}
              title="add resource"
              onClick={handleAddClick}
            />
          </div>
        ) : null}
      </div>

      <div className="navItems">
        {categories.map(category => (
          <NavItem
            key={category.id}
            category={category}
            userId={userId}
          />
        ))}
      </div>
    </div>
  )
}

export default NavPanel;
