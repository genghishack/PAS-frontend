import axios from "axios";

const apiUrl = 'http://localhost:3000';

export const getProfessional = async (token: string, id: string) => {
  const config = {headers: {Authorization: token}};
  const {data: professional} = await axios.get(`${apiUrl}/professional/${id}`, config);
}

export const createProfessional = async (token: string, profData: null | any = null) => {
  const config = {headers: {Authorization: token}};
  const data = (profData) ? {body: profData} : {};
  const {data: professional} = await axios.post(`${apiUrl}/professional/`, data, config);
  return professional;
}

export const listProfessionals = async (token: string) => {
  const config = {headers: {Authorization: token}};
  const {data: professionalList} = await axios.get(`${apiUrl}/professional/`, config);
  return professionalList;
}

export const addProfessionalToCategory = async (token: string, profId: string, catId: string) => {
  const config = {headers: {Authorization: token}};
  const data = {body: {category_id: catId}};
  const {data: professional} = await axios.post(`${apiUrl}/professional/${profId}/category/`, data, config);
  return professional;
}

export const removeProfessionalFromCategory = async (token: string, profId: string, catId: string) => {
  const config = {headers: {Authorization: token}};
  const {data: professional} = await axios.delete(`${apiUrl}/professional/${profId}/category/${catId}`, config);
  return professional;
}
