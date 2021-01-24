import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SimpleGrid, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";

let coso = new Array(25).fill("")
function App() {
  let [values, setValue] = useState({ column: 5, row: 5, cards: coso });
  let [cards, setCards] = useState(coso);

  const handleGridInputChange = (event) => {
    setValue({
      ...values,
      [event.target.name]: parseInt(event.target.value, 10),
    });
  };

  const handleInputChange = (event) => {
    let newCardsArray = [...cards];
    newCardsArray[event.target.name] = event.target.value;
  };

   
  return (
    <ChakraProvider>
      <div className="App">
      <Text fontSize='4em'>BINGO</Text>
      

        <Center>
          <SimpleGrid columns={values.column}>
            {values.cards
              .slice(0, values.row * values.column)
              .map((item, index) => (
                <Input
                  w="160px"
                  h="160px"
                  border="2px"
                  borderColor="black.200"
                  borderRadius="0"
                  name={index}
                  onChange={handleInputChange}
                />
              ))}
          </SimpleGrid>
        </Center>
      </div>
    </ChakraProvider>
  );
}

export default App;
