import axios from "axios";

const apiUrl = 'http://localhost:3000';

export const getCategory = async (token: string, id: string) => {
  const config = {headers: {Authorization: token}};
  const {data: category} = await axios.get(`${apiUrl}/category/${id}`, config);
  return category;
}

export const createCategory = async (token: string, catData: null | any = null) => {
  const config = {headers: {Authorization: token}};
  const data = (catData) ? {body: catData} : {};
  const {data: category} = await axios.post(`${apiUrl}/category/`, data, config);
  return category;
}

export const listCategories = async (token: string) => {
  const config = {headers: {Authorization: token}};
  const {data: categoryList} = await axios.get(`${apiUrl}/category/`, config);
  return categoryList;
}

export const getCategoryWithProfessionals = async (token: string, id: string) => {
  const config = {headers: {Authorization: token}};
  const {data: category} = await axios.get(`${apiUrl}/category/${id}/professionals`, config);
  return category;
}
