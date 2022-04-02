import client from "services";
const resource = "labels";

export const getAll = () => {
  return client.get(`/${resource}`);
};

export const getById = (id: number) => {
  return client.get(`/${resource}/${id}`);
};

const labelsService = {
  getAll,
  getById,
};

export default labelsService;
