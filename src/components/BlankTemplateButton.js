import React from "react";
import { greenBingo } from "../colors";
import { Button } from "@chakra-ui/react";

export default function BlankTemplateButton({ cards, setCards }) {

  const blankBingo = () => {
    setCards(new Array(25).fill(""))
  };

  return (
    <Button  bg={greenBingo} onClick={blankBingo} ml={3}>
      Blank Template
    </Button>
  );
}
