import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const loadDonorAndDares = async (id) => {
  const response = await api.get(`/profile/${id}`);
  const dares = response.data.dares;
  const donor = response.data.donor;
  return { dares, donor };
};

export const editProfile = async (id, data) => {
  const response = await api.patch(`/profile/${id}`, data);

  return response.data.donor;
};
