import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import React from "react";
import { primaryDark } from "../../theme/Colors";
import backgroundAnimation from "../../theme/backgroundAnimation.svg";

function LoadingPage() {
  return (
    <ChakraProvider>
      <Center width={window.innerWidth} height={window.innerHeight} backgroundColor={'rgb(0,0,0)'}>
        <Spinner color={primaryDark}/>
      </Center>
    </ChakraProvider>
  );
}

export default LoadingPage;
