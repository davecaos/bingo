import React from "react";
import { useClipboard, useToast, Button, Box } from "@chakra-ui/react";

export default function URLCopier({ cards }) {
  const queryParams = cards
    .map((text, index) => (text ? `${index}=${text}&` : ""))
    .join("");
  let currentURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname  // returns the absolute URL of a page
  const url = currentURL
  const pathname = url + "?" + queryParams;
  const { hasCopied, onCopy } = useClipboard(pathname);
  const toast = useToast();

  const handleCopy = () => {
    toast({
      title: "Copied!",
      position: "bottom-right",
      description: pathname,
      duration: 2000,
      status: "success",
      isClosable: true,
    });
    onCopy();
  };

  return (
    <Button colorScheme="red" onClick={handleCopy}>
      Share editable link
    </Button>
  );
}
