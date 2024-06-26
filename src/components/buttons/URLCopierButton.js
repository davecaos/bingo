import React from "react";
import { greenBingo } from "../../constants/colors";
import { useClipboard, useToast, Button } from "@chakra-ui/react";

const URLCopierButton = ({ cards }) => {
  const queryParams = cards
    .map((text, index) => (text ? `${index}=${text}&` : ""))
    .join("");
  let currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname  // returns the absolute URL of a page
  const url = currentURL
  const pathname = url + "?" + queryParams;
  const { _hasCopied, onCopy } = useClipboard(pathname);
  const toast = useToast();

  const handleCopy = () => {
    toast({
      title: "Copied to clipboard!",
      position: "bottom-right",
      description: pathname,
      duration: 2000,
      status: "success",
      isClosable: true,
    });
    onCopy();
  };

  return (
    <Button bg={greenBingo} onClick={handleCopy}ml={3}>
      Share editable link
    </Button>
  );
}

export default URLCopierButton;