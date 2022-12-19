import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import React from "react";
import { primaryDark } from "../../theme/Colors";
import backgroundAnimation from "../../theme/backgroundAnimation.svg";

function LoadingPage() {
  return (
    <ChakraProvider>
      <Center width={'100vmax'} height={'100vmin'} backgroundColor={'rgb(0,0,0)'}>
        <Spinner color={primaryDark}/>
      </Center>
    </ChakraProvider>
  );
}

export default LoadingPage;
