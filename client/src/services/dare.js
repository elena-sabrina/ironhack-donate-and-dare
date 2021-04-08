import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true
});

export const listTemplates = async () => {
  const response = await api.get("/dare/all");
  return response.data.templates;
};
