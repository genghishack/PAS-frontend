import React, { useState } from 'react';
import {useAdminContext} from "../../../context/AdminContext";
import {CategoryObj, ICategoryObj} from "../../../types/App";

interface ICategoryRow {
  initialCategoryData: any;
  getCategoryList: Function;
}

const CategoryRow = (props: ICategoryRow) => {
  // const {currentCategory, setCurrentCategory} = useAdminContext();
  const {initialCategoryData} = props;
  const [category, setCategory] = useState<CategoryObj>(initialCategoryData);
  // console.log({category})

  const {attributes: {nameSlug, nameDisplay}}: ICategoryObj = category;
  // const updateCategory = (categoryData) => {
  //   if (currentCategory.id === categoryData.id) {
  //     setCurrentCategory(categoryData);
  //   }
  //   setCategory(categoryData);
  // }

  return (
    <tr className="CategoryRow">
      <td>
        <div className="categoryCell">
          <div className="categorySlug">{nameSlug}</div>
        </div>
      </td>
      <td>
        <div className="categoryCell">
          <div className="categoryDisplayName">{nameDisplay}</div>
        </div>
      </td>
    </tr>

  )
}

export default CategoryRow;
