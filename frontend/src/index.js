import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/core";

import Head from "./Components/Head";
import Todos from "./Components/Todos";

function App() {
  return (
    <ChakraProvider>
      <Head />
      <Todos />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
