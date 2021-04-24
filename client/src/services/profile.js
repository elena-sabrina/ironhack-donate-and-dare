import api from "./api";

/*export const loadDonorAndDares = async (id) => {
  const response = await api.get(`/profile/${id}`);
  const dares = response.data.dares;
  const donor = response.data.donor;
  return { dares, donor };
};
*/

export const loadDonorAndDares = async (id) => {
  const response = await api.get(`/profile/${id}`);

  const {
    daresent,
    darevideouploaded,
    dareconfirmed,
    darerejected,
    darecanceled,
    donor
  } = response.data;

  return {
    daresent,
    darevideouploaded,
    dareconfirmed,
    darerejected,
    darecanceled,
    donor
  };
};

export const editProfile = async (id, data) => {
  const response = await api.patch(`/profile/${id}`, data);
  console.log("editprofile response services", response.data);

  return response.data;
};
