import React, {useEffect, useState} from 'react';
import {listCategories} from "../../../libs/catLib";
import {useAppContext} from "../../../context/AppContext";
import {Table} from "react-bootstrap";
import CategoryRow from "./CategoryRow";

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
      <header>Category admin</header>

      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Slug</th>
          <th>Display Name</th>
        </tr>
        </thead>
        <tbody>
        {categoryList.map((category: any) => (
          <CategoryRow
            key={category.id}
            initialCategoryData={category}
            getCategoryList={getCategoryList}
          />
        ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CategoryAdmin;
