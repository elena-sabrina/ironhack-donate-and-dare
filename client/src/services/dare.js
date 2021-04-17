import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const listTemplates = async () => {
  const response = await api.get("/dare/all");
  return response.data.templates;
};

export const loadTemplate = async (id) => {
  console.log("services loaddTemplate running");
  const response = await api.get(`/dare/create/${id}`);
  console.log("loadtemplate answer", response.data.template);
  return response.data.template;
};

export const createDare = async (id, data) => {
  console.log("services createDare running");
  const response = await api.post(`/dare/create/${id}`, data);
  const payment = response.data.payment;
  const dare = response.data.dare;
  return { dare, payment };
};

export const loadDares = async (id) => {
  const response = await api.get(`/profile/${id}`);

  const dares = response.data.dares;
  const donor = response.data.donor;
  return { dares, donor };
};

export const loadDareforDonorConfirmation = async (id) => {
  console.log("services loadDareforDonorConfirmation running");
  console.log("id:", id);
  const response = await api.get(`/dare/${id}/confirmation`);
  return response.data.dare;
};

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
