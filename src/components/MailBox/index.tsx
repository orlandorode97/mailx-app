import React, { useContext } from "react";
import { MessagesContext } from "../../contexts/Messages/index";
import {
  Text,
  useBreakpointValue,
  Stack,
  Heading,
  Button,
  Grid,
  GridItem,
  Center,
  Box,
  SimpleGrid,
  Flex,
  HStack,
  Spacer,
  Square,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";

import MessageView from "components/MailView";
import MailList from "components/MailList";
import { MailModalContextProvider } from "contexts/MailModal";

const MailBox: React.FC<{}> = () => {
  return (
    <MailModalContextProvider>
      <Flex
        direction={{ base: "column", md: "row" }}
        minH="90vh"
        ml={{ base: 0, md: 60 }}
      >
        <Box
          w={["100%", "100%", "70%", "50%"]}
          boxShadow="md"
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "0px",
            },
          }}
          maxH="90vh"
        >
          <MailList />
        </Box>
        <Box w={{ md: "full" }} boxShadow="md">
          <MessageView />
        </Box>
      </Flex>
    </MailModalContextProvider>
  );
};

export default MailBox;
