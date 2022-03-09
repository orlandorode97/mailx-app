import React, { useContext } from "react";
import Compose from "components/Compose";
import { LabelsContext } from "../../contexts/Labels/index";
import Label from "components/Label";
import { MAIN_LABELS } from "../../constants/labels";

const Drawer: React.FC<{}> = () => {
  const { labels } = useContext(LabelsContext);
  return (
    <div className="shadow-lg sidebar absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-180 ease-in-out">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-56">
          <Compose />
          <div className="mt-5 px-6 border-b-2">
            {Object.keys(MAIN_LABELS).map((key, i) => (
              <Label key={i} labelText={key} />
            ))}
          </div>

          <div className="mt-3 px-6">
            <p className="uppercase text-gray-400 text-sm font-normal">
              Labels
            </p>
            {labels &&
              labels.map((label) => (
                <Label key={label.id} labelText={label.name.toLowerCase()} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
