import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface ILabelContext {
  folders: ILabel[] | undefined;
  labels: ILabel[] | undefined;
  setMainLabels?: Dispatch<SetStateAction<ILabel[] | undefined>>;
  setFolders?: Dispatch<SetStateAction<ILabel[] | undefined>>;
  setLabels?: Dispatch<SetStateAction<ILabel[] | undefined>>;
}

interface ILabel {
  id: string;
  labelListVisibility?: string;
  messageListVisibility?: string;
  name: string;
  type: string;
}

const defaultState: ILabelContext = {
  folders: [],
  labels: [],
};

export const LabelsContext = createContext<ILabelContext>(defaultState);

export const LabelsProvider: React.FC<{}> = ({ children }) => {
  const [folders] = useState<ILabel[]>();
  const [labels, setLabels] = useState<ILabel[]>();

  const getLabels = useCallback(async () => {
    let { data } = await axios.get("http://localhost:8080/labels/", {
      withCredentials: true,
    });

    // Filter the labels of the type category and user
    data.labels = data.labels.filter(
      (label: ILabel) =>
        label.name.includes("CATEGORY") || label.type === "user"
    );

    setLabels(data.labels);
  }, [setLabels]);

  const getMainLabels = useCallback(() => {}, []);

  useEffect(() => {
    getMainLabels();
    getLabels();
  }, [getLabels, getMainLabels]);

  return (
    <LabelsContext.Provider value={{ folders, labels }}>
      {children}
    </LabelsContext.Provider>
  );
};
