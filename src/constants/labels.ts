export const INBOX = "inbox";
export const STARRED = "starred";
export const DRAFT = "draft";
export const SENT = "sent";
export const TRASH = "trash";
export const SPAM = "spam";

export const MAIN_LABELS = {
  inbox: "inbox",
  starred: "starred",
  sent: "sent",
  draft: "draft",
  trash: "trash",
  spam: "spam",
};

export function randomColor(): string {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}
