import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SimpleGrid, Text, Button , Box} from "@chakra-ui/react";
import React, { useState } from "react";
import URLCopier from "./URLCopier";
import domtoimage from "dom-to-image";
import Card from "./Card";
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
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  const image = () => {
    const input = document.getElementById("root");
    domtoimage
      .toJpeg(document.getElementById("root"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "bingo.jpeg";
        link.href = dataUrl;
        link.click();
        onClose();
      });
  };

  const onClick = () => {
    window.location.href = "https://twitter.com/intent/tweet?text=Bingo";
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Text fontSize="3em">EDITABLE BINGO ✏️</Text>

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

        <URLCopier cards={cards} />
        <Button bg="#00917a" onClick={image} ml={3}>
          Save as Image
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
