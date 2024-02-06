import React, { useState } from 'react';
import {useAdminContext} from "../../../../context/AdminContext";
import CategoryActionCell from "./CategoryActionCell";
import {CategoryObj, ICategoryObj} from "../../../../types/category";

interface ICategoryRow {
  initialCategoryData: CategoryObj;
  getCategoryList: Function;
}

const CategoryRow = (props: ICategoryRow) => {
  // const {currentCategory, setCurrentCategory} = useAdminContext();
  const {initialCategoryData, getCategoryList} = props;
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
        <div className="CategoryCell">
          <div className="categoryDisplayName">{nameDisplay}</div>
        </div>
      </td>
      <td>
        <div className="CategoryCell">
          <div className="categoryLabel">{nameSlug}</div>
        </div>
      </td>
      <td>
        <CategoryActionCell category={category}
                            setCategory={setCategory}
                            getCategoryList={getCategoryList}/>
      </td>
    </tr>

  )
}

export default CategoryRow;
