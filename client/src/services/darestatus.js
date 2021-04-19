import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const loadDareforDonor = async (id) => {
  console.log("services loadDareforDonor running");
  const response = await api.get(`/dare/${id}/donor`);
  return response.data.dare;
};

export const loadDareforDared = async (id) => {
  console.log("services loadDareforDared running");
  const response = await api.get(`/dare/${id}/dared`);
  return response.data.dare;
};

export const confirmDare = async (id, data) => {
  console.log("confirmDare running");
  const response = await api.patch(`/dare/${id}/donor`, data);
  console.log("confirmDare response.data", response.data);
  return response.data;
};
