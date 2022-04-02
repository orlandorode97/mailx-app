import { IconType } from "react-icons";
import {
  FiInbox,
  FiTrash,
  FiSend,
  FiFileText,
  FiStar,
  FiAlertCircle,
} from "react-icons/fi";

export const INBOX = "inbox";
export const STARRED = "starred";
export const DRAFT = "draft";
export const SENT = "sent";
export const TRASH = "trash";
export const SPAM = "spam";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export const MAIN_LABELS: Array<LinkItemProps> = [
  { name: "inbox", icon: FiInbox },
  { name: "starred", icon: FiStar },
  { name: "sent", icon: FiSend },
  { name: "draft", icon: FiFileText },
  { name: "trash", icon: FiTrash },
  { name: "spam", icon: FiAlertCircle },
];

export const DEFAULT_LABEL_COLOR = "#EF3E36";
