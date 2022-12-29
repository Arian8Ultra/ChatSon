import { Center, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { backgroundC, GlassBackground, GlassBackgroundDark, primary, primaryDark, primaryLight } from "../theme/Colors";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import "./App.css";
import LinkButton from "./components/LinkButton";
import MyModal from "./components/MyModal";
import TextInputNormal from "./components/TextInputNormal";
import MainFrame from "./pages/MainFrame";
import useNewChatModalStore from "./stores/NewChatModalStore";
import backgroundImage from "../Images/background.png";
import backgroundAnimation from "../theme/backgroundAnimationBP.svg";
import { Box } from "@mui/system";
import { Grid, ThemeProvider } from "@mui/material";
import UploadButton from "./components/UploadButton";
import { borderRadiuos, theme } from "../theme/Themes";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import useModalStore from "./stores/ModalStore";
import QRCode from "react-qr-code";

function App() {
  const [count, setCount] = useState(0);
  const openModal = useNewChatModalStore((state) => state.open);
  const changeModal = useNewChatModalStore((state) => state.changeModal);
  const openQRModal = useModalStore((state) => state.openQRmodal);
  const QRid = useModalStore((state) => state.QRid);
  const changeQRModal = useModalStore((state) => state.changeQRmodal);
  return (
    <ChakraProvider>
      <Box
        position={"fixed"}
        height={'100%'}
        width={"100vmax"}
        sx={{
          backgroundImage: `url(${backgroundAnimation})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></Box>
      <MainFrame />
      <LinkButton
        height={50}
        fontSize={"1.7vmin"}
        position={"fixed"}
        text={"New Chat"}
        bottom={0}
        padding={2}
        right={0}
        margin={2}
        textColor={'white'}
        backgroundColor={GlassBackground}
        fun={() => changeModal()}
        icon={<AddCircleRoundedIcon />}
        display={{ xs: "none", sm: "flex" }}
      />
      <MyModal
        height={""}
        bgColor={GlassBackground}
        color={primary}
        isOpen={openModal}
        onClose={changeModal}
        header={
          <Container my={1}>
            <Heading color={primary} fontWeight={"normal"} textAlign={"center"} fontSize={"30"}>
              New Chat
            </Heading>
          </Container>
        }
        content={<TextInputNormal borderRadius={3} multiline={true} label={"body of the chat"} />}
        footer={
          <ThemeProvider theme={theme}>
            <Grid container>
              <Grid item xs={6} lg={6}>
                <UploadButton
                  text='Add Image'
                  borderRadius={borderRadiuos}
                  icon={<ImageRoundedIcon />}
                  backgroundColor='white'
                />
              </Grid>
              <Grid item xs={6} lg={6} justifyContent={"left"}>
                <Center>
                  <LinkButton
                    text='Send'
                    borderRadius={borderRadiuos}
                    icon={<AddCircleRoundedIcon />}
                    fullWidth
                  />
                </Center>
              </Grid>
            </Grid>
          </ThemeProvider>
        }
      />
      <MyModal
        height={""}
        bgColor={GlassBackground}
        color={primary}
        isOpen={openQRModal}
        onClose={changeQRModal}
        header={
          <Container my={1}>
            <Heading color={primary} fontWeight={"normal"} textAlign={"center"} fontSize={"30"}>
              Public ID QR
            </Heading>
          </Container>
        }
        content={
          <Center width={'100%'} height={'100%'}>
          <QRCode value={QRid} fgColor={primary} bgColor={GlassBackground}/>
          </Center>
        }
      />
    </ChakraProvider>
  );
}

export default App;
