import axios from "axios";

export const listCategories = async (token: string) => {
  const {data: categoryList} = await axios.get('http://localhost:3000/category/', {
    headers: {Authorization: token}
  });
  return categoryList;
}

export const getCategoryWithProfessionals = async (token: string, id: string) => {
  const {data: category} = await axios.get(`http://localhost:3000/category/${id}/professionals`, {
    headers: {Authorization: token}
  });
  return category;
}
