import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import React from "react";
import { primaryDark } from "../../theme/Colors";

function LoadingPage() {
  return (
    <ChakraProvider>
      <Center width={'100vmax'} height={'100vmin'}>
        <Spinner color={primaryDark}/>
      </Center>
    </ChakraProvider>
  );
}

export default LoadingPage;
