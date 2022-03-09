import React from "react";
import Drawer from "components/Drawer";
import Navbar from "components/Navbar";
import InboxList from "components/InboxList";
import { LabelsProvider } from "contexts/Labels/index";

export default function Inbox() {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <div className="flex flex-grow overflow-hidden">
          <LabelsProvider>
            <Drawer />
          </LabelsProvider>
          <div className="flex-flex-grow w-full">
            <Navbar />
            <div className="flex">
              <div className="w-full">
                <InboxList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
