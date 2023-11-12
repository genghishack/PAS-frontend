import axios from "axios";

export const listProfessionals = async (token: string) => {
  const {data: professionalList} = await axios.get('http://localhost:3000/professional/', {
    headers: {Authorization: token}
  });
  return professionalList;
}

