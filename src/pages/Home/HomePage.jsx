import { Center } from "@chakra-ui/react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChatCard from "../../components/ChatCard";
import LinkButton from "../../components/LinkButton";
import useNewChatModalStore from "../../stores/NewChatModalStore";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { primary, primaryDark, primaryLight } from "../../../theme/Colors";
import testImage from "../../../Images/testImage.jpg";
import Logo from "../../../Images/ChatSonLogo.svg";
import { useEffect } from "react";
import usePageStore from "../../stores/PageStore";

export default function HomePage() {
  const openModal = useNewChatModalStore((state) => state.open);
  const changeModal = useNewChatModalStore((state) => state.changeModal);
  const changePageName = usePageStore((state) => state.changePageName);

  useEffect(()=>{
    changePageName('Home')
  },[])
  return (
    <Box width={"100%"}>
      <Stack spacing={2}>
        <ChatCard
          name={"Arian Rezaei"}
          date='1/1/1401'
          time={"7:30"}
          message='this is a test for this shit'
          ChatImage={testImage}
          profileImage={Logo}
          official='chatSon'
        />
        <ChatCard
          name={"Arian Rezaei"}
          date='1/1/1401'
          time={"7:30"}
          message='this is a test for this shit'
          ChatImage={testImage}
          profileImage={Logo}
          official='chatSon'
        />
        <ChatCard
          name={"Arian Rezaei"}
          date='1/1/1401'
          time={"7:30"}
          message='this is a test for this shit'
          ChatImage={testImage}
          profileImage={Logo}
          official='chatSon'
        />
        <ChatCard
          name={"Arian Rezaei"}
          date='1/1/1401'
          time={"7:30"}
          message='this is a test for this shit'
          ChatImage={testImage}
          profileImage={Logo}
          official='chatSon'
        />
        <ChatCard official='news' />
        <ChatCard official='danger' />
      </Stack>
    </Box>
  );
}
