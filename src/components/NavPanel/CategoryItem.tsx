import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faCheck,
  faEdit,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
import {useResourceContext} from "../../context/ResourceContext";
import {Button} from "react-bootstrap";
import ProfessionalList from "./ProfessionalList";
import {CategoryObj} from "../../types/category";

interface ICategoryItem {
  category: CategoryObj;
  userId: string | null;
}

const CategoryItem = (props: ICategoryItem) => {
  const {category, userId} = props;
  const {attributes: {nameDisplay}} = category;
  const {
    selectedCategory,
    setSelectedCategory,
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
    setSelectedCategory(category);
  }

  // const handleSubmitClick = async () => {
  //   setSelectedResource(category);
  //   setShowSubmitResourceModal(true);
  // }

  // const handleEditClick = () => {
  //   setSelectedResource(category);
  //   setShowEditResourceModal(true);
  // }

  // const handleDeleteClick = () => {
  //   setSelectedResource(category);
  //   setShowDeleteResourceModal(true);
  // }


  return (
    <div className="NavItem">
      <div className="categoryInfo">
        <div className="categoryName">
          <Button variant="link"
                  onClick={handleCategoryClick}
                  className={(selectedCategory.id && selectedCategory.id === category.id) ? 'selected' : ''}
          >
            {nameDisplay}
          </Button>
        </div>
        {(selectedCategory.id && selectedCategory.id === category.id) ? <ProfessionalList/> : null}
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

export default CategoryItem;
