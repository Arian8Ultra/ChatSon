import { Center } from "@chakra-ui/react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChatCard from "../../components/ChatCard";
import LinkButton from "../../components/LinkButton";
import useNewChatModalStore from "../../stores/NewChatModalStore";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { primary, primaryDark, primaryLight } from "../../../theme/Colors";
import usePageStore from "../../stores/PageStore";
import { useEffect } from "react";
import { useState } from "react";
import useUserStore from "../../stores/UserStore";
import { GetAllChatsByLikes } from "../../Services/API";

export default function TrendingsPage() {
  const openModal = useNewChatModalStore((state) => state.open);
  const changeModal = useNewChatModalStore((state) => state.changeModal);
  const changePageName = usePageStore((state) => state.changePageName);
  const token = useUserStore((state) => state.Token);
  const [chatList, setChatList] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const onFail = () => {};
  const onSuccess = () => {};
  useEffect(() => {
    // changing page name to Home
    changePageName('Trendings')
    if (counter == 0) {
      // getting chats from server
      setCounter(1);
      GetAllChatsByLikes(token, onSuccess, onFail,setChatList);
      setInterval(() => {
        GetAllChatsByLikes(token, onSuccess, onFail,setChatList);
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
            liked={chat.liked}
            likeNum={chat.likes}
          />
        ))}
      </Stack>
    </Box>
  );
}
