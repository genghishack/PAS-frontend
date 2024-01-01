import React, {useEffect, useState} from 'react';
import {listCategories} from "../../../libs/catLib";
import {useAppContext} from "../../../context/AppContext";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";

const CategoryAdmin = () => {
  const {accessToken} = useAppContext();

  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    const categories = await listCategories(accessToken);
    console.log({categories})
    setCategoryList(categories.data);
  }

  useEffect(() => {
    getCategoryList().then();
  }, [])

  return (
    <div className="CategoryAdmin">
      <div className="adminHeader">
        <div className="title">Administration: Categories</div>
        <div className="controls">
          <AddCategory getCategoryList={getCategoryList}/>
        </div>
      </div>
      <CategoryTable categoryList={categoryList}
                     getCategoryList={getCategoryList}/>
    </div>
  )
}

export default CategoryAdmin;
