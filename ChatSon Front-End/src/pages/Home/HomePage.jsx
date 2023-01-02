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
      setCounter(1);
      GetChats(token, onSuccess, onFail,setChatList);
      setInterval(() => {
        GetChats(token, onSuccess, onFail,setChatList);
      }, 60000);
    }
  }, []);


  return (
    <Box width={"100%"}>
      <Stack spacing={2}>
        {chatList.map((chat) => (
          <ChatCard
            key={chat.id}
            name={chat.username}
            date={chat.date}
            time={chat.time}
            message={chat.content}
            id={chat.id}
          />
        ))}
        <ChatCard
          name={"Arian Rezaei"}
          date='1/1/1401'
          time={"7:30"}
          message='this is a test'
          ChatImage={testImage}
          profileImage={Logo}
          official='chatSon'
        />
        <ChatCard
          name={"Hanieh"}
          date='17/4/1401'
          time={"9:45"}
          message='this is a news chat'
          official='news'
        />
        <ChatCard
          name={"Niloofar"}
          date='5/8/1401'
          time={"19:28"}
          message='this is a normal chat'
        />
        <ChatCard
          name={"Parinaz"}
          date='27/9/1401'
          time={"10:13"}
          message='این یک تست برای چت فارسی است'
          official='news'
        />
      </Stack>
    </Box>
  );
}
