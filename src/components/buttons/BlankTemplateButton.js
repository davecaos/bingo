import React from "react";
import { greenBingo } from "../../constants/colors";
import { Button } from "@chakra-ui/react";
import {TILE_NUMBER} from "../../constants";

const BlankTemplateButton = ({setCards }) => {
  const blankBingo = () => {
    setCards(new Array(TILE_NUMBER).fill(""))
  };

  return (
    <Button  bg={greenBingo} onClick={blankBingo} ml={3}>
      Blank Template
    </Button>
  );
}

export default BlankTemplateButton;