import React from "react";
import Inbox from "./Inbox";
import { LabelsProvider } from "contexts/Labels/index";
import { UserProvider } from "contexts/Users";
import { MessagesProvider } from "contexts/Messages";

const InboxContainer: React.FC<{}> = () => {
  return (
    <LabelsProvider>
      <UserProvider>
        <MessagesProvider>
          <Inbox />
        </MessagesProvider>
      </UserProvider>
    </LabelsProvider>
  );
};

export default InboxContainer;
