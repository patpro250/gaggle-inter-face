import toast from "react-hot-toast";

export const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success(`Copied: ${text}`);
};
