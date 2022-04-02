import client from "services";
const resource = "messages";

export const getMessages = () => {
  return client.get(`/${resource}`);
};

const messageService = {
  getMessages,
};

export default messageService;
