import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import "./App.css";

function App() {
  let currentURL = window.location.href; // returns the absolute URL of a page
  const url = new URL(currentURL);
  let params = new URLSearchParams(url.search);

  let cardsFromQueryParams = new Array(25).fill("");

  for (let p of params) {
    let key = p[0];
    let value = p[1];
    if ((key) => 0 && key <= 25) cardsFromQueryParams[parseInt(key)] = value;
  }

  let [cards, setCards] = useState(cardsFromQueryParams);

  const handleInputChange = (event) => {
    let newCardsArray = [...cards];
    newCardsArray[event.target.name] = event.target.value;
    setCards(newCardsArray);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <div id="bingo" className="bingo">
          <Box p={1}>
            <Title />
            <Center>
              <SimpleGrid columns={5}>
                {cards.map((text, index) => {
                  let isCenter = index === 12;
                  return (
                    <Card
                      text={text}
                      index={index}
                      onChange={handleInputChange}
                      isCenter={isCenter}
                    />
                  );
                })}
              </SimpleGrid>
            </Center>
          </Box>
        </div>
        <Buttons cards={cards} setCards={setCards}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
