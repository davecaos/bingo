import { Center, Text, Box } from "@chakra-ui/react";
import React from "react";

import { greenBingo } from "../colors";

export default function Title() {
  return (
    <Center>
      <Box p={2}>
        <Text fontSize="2.8em">EDITABLE BINGO ✏️</Text>
        <Box bg={greenBingo} p={1} w="750px" />
      </Box>
    </Center>
  );
};
 

