import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const signIn = async (data) => {
  const response = await api.post("/authentication/sign-in", data);
  const body = response.data;
  const donor = body.donor;
  return donor;
};

export const signUp = async (data) => {
  const response = await api.post("/authentication/sign-up", data);
  const body = response.data;
  const donor = body.donor;
  return donor;
};

export const verify = async () => {
  const response = await api.get("/authentication/verify");
  const body = response.data;
  console.log("verify:");
  console.log(body);
  const donor = body.donor;
  return donor;
};

export const signOut = async () => {
  await api.post("/authentication/sign-out");
};
