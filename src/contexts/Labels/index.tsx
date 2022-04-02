import React, { createContext, useCallback, useEffect, useState } from "react";
import labelsService from "services/Labels";
import { Dispatch, SetStateAction } from "react";

interface ILabelContext {
  folders: ILabel[] | undefined;
  labels: ILabel[];
  setMainLabels?: Dispatch<SetStateAction<ILabel[] | undefined>>;
  setFolders?: Dispatch<SetStateAction<ILabel[] | undefined>>;
  setLabels?: Dispatch<SetStateAction<ILabel[]>>;
}

interface ILabel {
  id: string;
  labelListVisibility?: string;
  messageListVisibility?: string;
  name: string;
  type: string;
  color?: IColor | undefined;
}

interface IColor {
  backgroundColor: string;
  textColor: string;
}

const defaultState: ILabelContext = {
  folders: [],
  labels: [],
};

export const LabelsContext = createContext<ILabelContext>(defaultState);

export const LabelsProvider: React.FC<{}> = ({ children }) => {
  const [folders] = useState<ILabel[]>();
  const [labels, setLabels] = useState<ILabel[]>([]);

  const getLabels = useCallback(async () => {
    if (!labels || labels.length === 0) {
      let { data } = await labelsService.getAll();

      // Filter the labels of the type category and user
      data.labels = data.labels.filter(
        (label: ILabel) =>
          label.name.includes("CATEGORY") || label.type === "user"
      );

      setLabels(data.labels);
    }
  }, [setLabels, labels]);

  useEffect(() => {
    getLabels();
  }, [getLabels]);

  return (
    <LabelsContext.Provider value={{ folders, labels }}>
      {children}
    </LabelsContext.Provider>
  );
};
