import React, { useContext } from "react";
import EmptyMailView from "components/EmptyMailView";
import { MessageContext } from "../../contexts/Messages/index";
import {
  MailModalContext,
  MailModalContextProvider,
} from "../../contexts/MailModal/index";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";

const MailView: React.FC<{}> = () => {
  const { mailHtml } = useContext(MessageContext);
  const { isOpen, closeModal } = useContext(MailModalContext);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {mailHtml && isLargerThan768 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          justify={{ base: "center", md: "space-around", xl: "space-around" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="nowrap"
          display={{ base: "none", md: "flex" }}
          minH="90vh"
        >
          <Stack
            align="center"
            overflowY="scroll"
            maxH="80vh"
            css={{
              "&::-webkit-scrollbar": {
                width: "0px",
              },
            }}
          >
            {<div dangerouslySetInnerHTML={{ __html: mailHtml }} />}
          </Stack>
        </Flex>
      )}
      {!isLargerThan768 && (
        <Modal
          onClose={closeModal}
          size={"full"}
          isOpen={isOpen}
          scrollBehavior={"inside"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
              {<div dangerouslySetInnerHTML={{ __html: mailHtml }} />}
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {!mailHtml && <EmptyMailView />}
    </>
  );
};

export default MailView;
