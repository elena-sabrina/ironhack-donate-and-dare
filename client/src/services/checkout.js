import api from './api';

export const loadDare = async (id) => {
  console.log("services loaddDare running");
  const response = await api.get(`checkout/${id}`);
  console.log(response.data);
  console.log("response.data.dare");
  console.log(response.data.dare);
  return response.data.dare;
  console.log("response");
  console.log(response);
};
