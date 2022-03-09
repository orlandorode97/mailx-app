import React from "react";
import { INBOX, STARRED, DRAFT, SENT, TRASH, SPAM } from "constants/labels";
import HiIcon from "components/HiIcon";
import {
  FiInbox,
  FiTrash,
  FiSend,
  FiFileText,
  FiStar,
  FiAlertCircle,
} from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";

interface ILabel {
  labelText: string;
}

const Label: React.FC<ILabel> = ({ labelText }) => {
  const renderIcon = () => {
    switch (labelText.toLowerCase()) {
      case INBOX:
        return <FiInbox size={18} />;
      case STARRED:
        return <FiStar size={18} />;
      case DRAFT:
        return <FiFileText size={18} />;
      case SENT:
        return <FiSend size={18} />;
      case TRASH:
        return <FiTrash size={18} />;
      case SPAM:
        return <FiAlertCircle size={18} />;
      default:
        return <FaBookmark size={15} color="#EF3E36" />;
    }
  };

  const renderLabelText = () => {
    let text = labelText.includes("category")
      ? labelText.split("_")[1]
      : labelText;

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <p className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-180  text-gray-600 dark:text-gray-400 rounded-lg ">
      <HiIcon className="m-auto">{renderIcon()}</HiIcon>
      <span className=" mx-4 text-sm font-normal">{renderLabelText()}</span>
      <span className="flex-grow text-right"></span>
    </p>
  );
};

export default Label;
