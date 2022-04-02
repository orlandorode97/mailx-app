import client from "services";
const resource = "users";

export const getCurrent = () => {
  return client.get(`/${resource}`);
};

const userService = {
  getCurrent,
};

export default userService;
