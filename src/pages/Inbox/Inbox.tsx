import React from "react";
import {
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Mailbox from "components/MailBox";
import { MessageProvider } from "contexts/Messages";

const Inbox: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" overflow="revert">
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Navbar onOpen={onOpen} />
      <MessageProvider>
        <Mailbox />
      </MessageProvider>
    </Flex>
  );
};

export default Inbox;
