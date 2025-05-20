"use client";

import { CopyIcon } from "lucide-react";
import { IconButton } from "@radix-ui/themes";
import toast from "react-hot-toast";

interface Props {
  value: string;
}

const CopyButton = ({ value }: Props) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  return (
    <IconButton
      size="1"
      aria-label="Copy value"
      color="gray"
      variant="ghost"
      onClick={copyToClipboard}
    >
      <CopyIcon className="w-4 h-4" />
    </IconButton>
  );
};

export default CopyButton;
