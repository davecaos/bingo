import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SimpleGrid, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import URLCopier from "./URLCopier";
import html2canvas from "html2canvas";
import Card from "./Card";
import "./App.css";


function App() {
  let currentURL = window.location.href; // returns the absolute URL of a page
  const url = new URL(currentURL);
  let params = new URLSearchParams(url.search)

  let cardsFromQueryParams = new Array(25).fill("");

  for (let p of params) {
    let key = p[0]
    let value = p[1]
    if (key => 0 && key <=25)
      (cardsFromQueryParams[parseInt(key)] = value)
  }

  let [cards, setCards] = useState(cardsFromQueryParams);

  const handleInputChange = (event) => {
    let newCardsArray = [...cards];
    newCardsArray[event.target.name] = event.target.value;
    setCards(newCardsArray)
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  const image = () => {
    const input = document.getElementById("root");
    html2canvas(input).then((canvas) => {
      const a = document.createElement("a");
      a.download = "bingo.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
      onClose();
    });
  };

  const onClick = ( )=>{
    window.location.href="https://twitter.com/intent/tweet?text=Bingo" ;
}

  return (
    <ChakraProvider>
      <div className="App">
        <Text fontSize="3em">BINGO</Text>

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
      
        <URLCopier cards={cards}/>
        <Button colorScheme="red" onClick={image} ml={3}>
                Save as Image
              </Button>
              <Button colorScheme="red" onClick={onClick} ml={3}>
                Share in Twitter
              </Button>
    
      </div>
    </ChakraProvider>
  );
}




export default App;
