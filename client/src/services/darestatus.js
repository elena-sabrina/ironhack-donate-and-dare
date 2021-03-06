import api from "./api";

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

export const confirmorRejectDare = async (id, data) => {
  console.log("confirmDare running");
  const response = await api.patch(`/dare/${id}/donor`, data);
  return response.data;
};

export const videoUploaded = async (id, data) => {
  console.log("videoUploaded running");
  const response = await api.patch(`/dare/${id}/dared`, data);
  console.log("videoUploaded response.data", response.data);
  return response.data;
};
