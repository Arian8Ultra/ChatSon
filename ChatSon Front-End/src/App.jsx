import { Center, ChakraProvider, Container, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import {
  backgroundC,
  GlassBackground,
  GlassBackgroundDark,
  primary,
  primaryDark,
  primaryLight,
} from "../theme/Colors";
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
import LogoImage from "../Images/Zan-Zendegi-Azadi.jpg";
import QRCode from "react-qr-code";
import { NewChat } from "./Services/API";
import useUserStore from "./stores/UserStore";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useEffect } from "react";
import { Message } from "./Classes/Message";

function App() {

  const [count, setCount] = useState(0);
  const [newChatText, setNewChatText] = useState("");
  const openModal = useNewChatModalStore((state) => state.open);
  const changeModal = useNewChatModalStore((state) => state.changeModal);
  const openQRModal = useModalStore((state) => state.openQRmodal);
  const QRid = useModalStore((state) => state.QRid);
  const changeQRModal = useModalStore((state) => state.changeQRmodal);
  const token = useUserStore((state) => state.Token);
  const UserName = useUserStore((state) => state.UserName);

  const onFail = () => {};
  const onSuccess = () => {
    changeModal()
  };

  const handleNewChat=(text)=>{
    NewChat(onSuccess,onFail,text,token);
  }

  const SignedIn = useUserStore((state) => state.SignedIn);
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
  );

  useEffect(() => {
    document.title = 'Check List';
    if (!SignedIn) {
      handleNavigate();
    }
  });
  return (
    <ChakraProvider>
      <Box
        position={"fixed"}
        height={"100%"}
        width={"100vmax"}
        sx={{
          backgroundImage: `url(${backgroundAnimation})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
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
        textColor={"white"}
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
        content={<TextInputNormal borderRadius={3} multiline={true} getText={setNewChatText} label={"body of the chat"} />}
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
                    fun={() => handleNewChat(newChatText)}
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
          <Center width={"100%"} height={"100%"}>
            <QRCode value={QRid} fgColor={primary} bgColor={GlassBackground} />
          </Center>
        }
      />

      <Image src={LogoImage} position={"fixed"} bottom={20} right={5} width={"50px"} borderRadius={180} zIndex={theme.zIndex.appBar+1}/>

    </ChakraProvider>
  );
}

export default App;
