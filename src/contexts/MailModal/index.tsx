import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { useDisclosure } from "@chakra-ui/react";

interface IMailModalContext {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const defaultState: IMailModalContext = {
  isOpen: false,
  closeModal: () => true,
  openModal: () => true,
};

export const MailModalContext = createContext<IMailModalContext>(defaultState);

export const MailModalContextProvider: React.FC<{}> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  const openModal = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <MailModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </MailModalContext.Provider>
  );
};
