import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

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
