import React, { useContext } from "react";
import {
  Stack,
  Heading,
  Image,
  Text,
  Box,
  Avatar,
  Center,
  useColorModeValue,
  VStack,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Mail from "components/Mail";
import { MessagesContext } from "contexts/Messages";

const MailList: React.FC<{}> = () => {
  const { messages } = useContext(MessagesContext);
  return (
    <>
      {messages.map((message) => (
        <Mail
          key={message.id}
          subject={
            message.payload.headers.find((msg) => msg.name === "Subject")?.value
          }
          from={
            message.payload.headers.find((msg) => msg.name === "From")?.value
          }
          message={message}
        />
      ))}
    </>
  );
};

export default MailList;
