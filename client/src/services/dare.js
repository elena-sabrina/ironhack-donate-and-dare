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
  return response.data.template;
};

export const createDare = async (id, data) => {
  console.log("services createDare running");
  const response = await api.post(`/dare/create/${id}`, data);
  return response.data.dare;
};

export const loadDares = async (id) => {
  console.log("services loadDare running");
  console.log(id);
  const response = await api.get(`/profile/${id}`);
  console.log("loging response");
  console.log(response.data.dares);
  return response.data.dares;
};
