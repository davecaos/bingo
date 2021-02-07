import { Box } from "@chakra-ui/react";
import React from "react";
import URLCopierButton from "./URLCopierButton";
import ImageSaveButton from "./ImageSaveButton";
 
export default function Buttons({ cards }){
    return (
      <Box p={2}>
        <URLCopierButton cards={cards} />
        <ImageSaveButton />
      </Box>
    );
  };


