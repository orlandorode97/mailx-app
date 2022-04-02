import React, { createContext, useCallback, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import messageService from "services/Messages/index";

export interface IMessagesContext {
  messages: IMessage[];
  setMessages?: Dispatch<SetStateAction<IMessage[]>>;
}

export interface IMessage {
  historyId: string;
  id: string;
  internalDate: string;
  labelIds: string[];
  payload: IPayload;
  sizeEstimate: number;
  snippet: string;
  threadId: string;
  html: string;
}

export interface IPayload {
  body: IPayloadBody;
  headers: IHeader[];
  mimeType: string;
  parts: IPart[];
}

export interface IPayloadBody {}

export interface IHeader {
  name: string;
  value: string;
}

export interface IPart {
  body: IPartBody;
  headers: IHeader[];
  mimeType: string;
  partId: string;
}

export interface IPartBody {
  data: string;
  size: number;
}

const defaultMgsState: IMessagesContext = {
  messages: [],
};

export const MessagesContext = createContext<IMessagesContext>(defaultMgsState);

export const MessagesProvider: React.FC<{}> = ({ children }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const getMessages = useCallback(async () => {
    if (!messages || messages.length === 0) {
      let { data } = await messageService.getMessages();

      setMessages(data.messages);
    }
  }, [setMessages, messages]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <MessagesContext.Provider value={{ messages }}>
      {children}
    </MessagesContext.Provider>
  );
};

export interface IMessageContext {
  mailHtml: string;
  setMailHtml?: Dispatch<SetStateAction<string>>;
}

const defaultMessageState: IMessageContext = {
  mailHtml: "",
};

export const MessageContext = createContext(defaultMessageState);

export const MessageProvider: React.FC<{}> = ({ children }) => {
  const [mailHtml, setMailHtml] = useState<string>("");

  return (
    <MessageContext.Provider value={{ setMailHtml, mailHtml }}>
      {children}
    </MessageContext.Provider>
  );
};
