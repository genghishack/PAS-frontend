import {CategoryObj} from "../../../types/App";
import CategoryRow from "./CategoryTable/CategoryRow";
import React from "react";
import {Table} from "react-bootstrap";

interface ICategoryTable {
  categoryList: CategoryObj[];
  getCategoryList: Function;
}

const CategoryTable = (props: ICategoryTable) => {
  const {categoryList, getCategoryList} = props;

  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Display Name</th>
        <th>Key/Label</th>
        <th>Action</th>
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
  )
}

export default CategoryTable;
