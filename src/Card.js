import { Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";

const Card = ({ text, onChange, index, isCenter }) => {
  const backgroundColor = isCenter ? "#00917a" : "#f7eada";
  const color = isCenter ? "#f3e9de" : "black.200";
  return (
    <Textarea
      w="160px"
      h="160px"
      border="2px"
      fontSize={15}
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

export default Card;
