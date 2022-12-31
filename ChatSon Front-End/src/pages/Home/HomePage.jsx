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
import { GetChats } from "../../Services/API";
import useAlertStore from "../../stores/AlertStore";
import useUserStore from "../../stores/UserStore";

export default function HomePage() {
  const changePageName = usePageStore((state) => state.changePageName);
  const AlertChange = useAlertStore((state) => state.changeAlert);
  const token = useUserStore((state) => state.Token);
  const [chatList, setChatList] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const onFail = () => {};
  const onSuccess = () => {};
  useEffect(() => {
    // changing page name to Home
    changePageName("Home");
    if (counter == 0) {
      // getting chats from server
      GetChats(onSuccess, onFail,setChatList,token);
      setCounter(1);
    }
  });
  return (
    <Box width={"100%"}>
      <Stack spacing={2}>

        {chatList.map((chat) => {
            <ChatCard
              name={chat.user.username}
              date={chat.created_a}
              time={''}
              message={chat.text}
              id={chat.id}
              likeNumber={chat.likes}
            />
        })}
        {/* <ChatCard
          name={"Arian Rezaei"}
          date='1/1/1401'
          time={"7:30"}
          message='this is a test'
          ChatImage={testImage}
          profileImage={Logo}
          official='chatSon'
        />

        <ChatCard official='news' />
        <ChatCard official='danger' /> */}
      </Stack>
    </Box>
  );
}
