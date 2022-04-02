import client from "services";
const resource = "auth";

export const getAuthUrl = () => {
  return client.get(`/${resource}/login/`);
};

export const logout = () => {
  return client.get(`/${resource}/logout/`);
};

const authService = {
  getAuthUrl,
  logout,
};

export default authService;
