import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { primary, primaryDark } from "../theme/Colors";
import "./App.css";
import MyModal from "./components/MyModal";
import MainFrame from "./pages/MainFrame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <MainFrame />
      <MyModal bgColor={primaryDark} color={primary} isOpen={false}
      header={
        <Container my={1}>
          <Heading color={primary} fontWeight={"bold"} textAlign={"center"} fontSize={"30"}>
            New Chat
          </Heading>
        </Container>
      } />
    </ChakraProvider>
  );
}

export default App;
