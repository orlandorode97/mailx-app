import React from "react";
import HiIcon from "components/HiIcon";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Compose: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-center mx-6 mt-10">
      <button
        type="button"
        className="py-3 px-7 font-medium text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:ring-red-300 rounded-lg text-sm text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 justify-center shadow-lg shadow-red-700/40"
      >
        <HiIcon>
          <HiOutlinePencilAlt size={18} />
        </HiIcon>
        Compose
      </button>
    </div>
  );
};

export default Compose;
