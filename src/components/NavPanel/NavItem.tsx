import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faCheck,
  faEdit,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
import {useResourceContext} from "../../context/ResourceContext";
import {Button} from "react-bootstrap";
import {CategoryObj} from "../../types/App";

interface INavItem {
  category: CategoryObj;
  userId: string | null;
}

const NavItem = (props: INavItem) => {
  const {category, userId} = props;
  const {attributes: {name_display}} = category;
  const {
    professionals,
    selectedCategory,
    setDisplayedCategory,
    setSelectedCategory,
    setDisplayedResource,
    setSelectedResource,
    setShowDeleteResourceModal,
    setShowEditResourceModal,
    setShowSubmitResourceModal,
  } = useResourceContext();

  // const resourceLocation = () => {
  //   const address = resource.address_json;
  //   const display: string[] = [];
  //   if (address.city) {
  //     display.push(address.city);
  //   }
  //   if (address.state) {
  //     display.push(address.state);
  //   }
  //   if (!address.city) {
  //     display.push(address.country);
  //   }
  //   return display.join(', ');
  // }

  const handleCategoryClick = (evt) => {
    evt.preventDefault();
    // setDisplayedCategory(category);
    setSelectedCategory(category);
  }

  const handleSubmitClick = async () => {
    setSelectedResource(category);
    setShowSubmitResourceModal(true);
  }

  const handleEditClick = () => {
    setSelectedResource(category);
    setShowEditResourceModal(true);
  }

  const handleDeleteClick = () => {
    setSelectedResource(category);
    setShowDeleteResourceModal(true);
  }

  return (
    <div className="NavItem">
      <div className="categoryInfo">
        <div className="categoryName">
          <Button variant="link" onClick={handleCategoryClick}>
            {name_display}
          </Button>
        </div>
        {(selectedCategory.id && selectedCategory.id === category.id) ? (() => {
          return (
            <div className="professionalsList">
              {professionals.map(professional => {
                return (
                  <div key={professional.id} className="professionalInfo">
                    {professional['name_first']} {professional['name_last']}
                  </div>
                )
              })}
            </div>
          )
        })() : null}
        {/*<div className="resourceLocation">*/}
        {/*  {resourceLocation()}*/}
        {/*</div>*/}
      </div>
      {/*{userId ? (*/}
      {/*  <div className="resourceControls">*/}
      {/*    <FontAwesomeIcon*/}
      {/*      className="control edit"*/}
      {/*      icon={faEdit}*/}
      {/*      title="edit resource"*/}
      {/*      onClick={handleEditClick}*/}
      {/*    />*/}
      {/*    <FontAwesomeIcon*/}
      {/*      className="control delete"*/}
      {/*      icon={faMinusSquare}*/}
      {/*      title="delete resource"*/}
      {/*      onClick={handleDeleteClick}*/}
      {/*    />*/}
      {/*    {resource.submitted_for_approval ? (*/}
      {/*      <FontAwesomeIcon*/}
      {/*        className="info submit"*/}
      {/*        icon={faCheck}*/}
      {/*        title="submitted"*/}
      {/*      />*/}
      {/*    ) : (*/}
      {/*      <FontAwesomeIcon*/}
      {/*        className="control submit"*/}
      {/*        icon={faArrowAltCircleRight}*/}
      {/*        title="submit for approval"*/}
      {/*        onClick={handleSubmitClick}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*) : null}*/}
    </div>
  )
}

export default NavItem;
