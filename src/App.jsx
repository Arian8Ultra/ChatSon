import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { backgroundC, primary, primaryDark, primaryLight } from "../theme/Colors";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import "./App.css";
import LinkButton from "./components/LinkButton";
import MyModal from "./components/MyModal";
import TextInputNormal from "./components/TextInputNormal";
import MainFrame from "./pages/MainFrame";
import useNewChatModalStore from "./stores/NewChatModalStore";
function App() {
  const [count, setCount] = useState(0);
  const openModal = useNewChatModalStore((state) => state.open);
  const changeModal = useNewChatModalStore((state) => state.changeModal);
  return (
    <ChakraProvider>
      <MainFrame />
      <LinkButton
        height={50}
        fontSize={'1.7vmin'}
        position={"fixed"}
        text={"NEW CHAT"}
        bottom={0}
        padding={4}
        right={0}
        margin={2}
        textColor={'black'}
        backgroundColor={primary}
        hoverColor={primaryLight}
        fun={() => changeModal()}
        icon={<AddCircleRoundedIcon />}
      />
      <MyModal height={''} bgColor={backgroundC} color={primary} isOpen={openModal} onClose={changeModal}
      header={
        <Container my={1}>
          <Heading color={primary} fontWeight={"normal"} textAlign={"center"} fontSize={"30"}>
            New Chat
          </Heading>
        </Container>
      }
      content={
        <TextInputNormal borderRadius={3} multiline={true} label={'body of the chat'}/>
      }
      footer={
        <LinkButton text="Send"/>
      }
 />
    </ChakraProvider>
  );
}

export default App;
