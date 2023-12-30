import axios from "axios";

const apiUrl = 'http://localhost:3000';

export const listProfessionals = async (token: string) => {
  const {data: professionalList} = await axios.get(`${apiUrl}/professional/`, {
    headers: {Authorization: token}
  });
  return professionalList;
}

export const addProfessionalToCategory = async (token: string, profId: string, catId: string) => {
  const result = await axios.post(`${apiUrl}/professional/${profId}/category/${catId}`, {}, {
    headers: {Authorization: token}
  });
  console.log({result});
  return null;
}

export const removeProfessionalFromCategory = async (token: string, profId: string, catId: string) => {
  const result = await axios.delete(`${apiUrl}/professional/${profId}/category/${catId}`, {
    headers: {Authorization: token}
  });
  console.log({result});
  return null;
}
