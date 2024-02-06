import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { useResourceContext } from '../../context/ResourceContext';
import CategoryItem from "./CategoryItem";

import './NavPanel.scss';

interface INavPanel {
  userId: string | null;
}

const NavPanel = (props: INavPanel) => {
  const {userId} = props;
  const {categories, setShowAddResourceModal} = useResourceContext();

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
          <CategoryItem
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
