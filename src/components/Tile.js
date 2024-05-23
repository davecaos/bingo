import { Textarea } from "@chakra-ui/react";
import React from "react";
import { bgBingo, greenBingo } from "../constants/colors";

const Tile = ({ text, onChange, index, isCenter }) => {
  const backgroundColor = isCenter ? greenBingo : bgBingo;
  const color = isCenter ? "#f3e9de" : "black.200";
  return (
    <Textarea
      w="150px"
      h="150px"
      border="2px"
      fontSize={14}
      borderColor="black.200"
      borderRadius="0"
      textAlign={[ 'center' ]}
      style={{
        whiteSpace: "normal",
        fontWeight: "bold",
        wordWrap: "break-all",
        textJustify: "inter-word"
      }}
      color={color}
      value={text}
      backgroundColor={backgroundColor}
      name={index}
      onChange={onChange}
    />
  );
}

export default Tile;
