import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { GlassBackground } from "../../theme/Colors.js";
import ChatBubble from "./ChatBubble.jsx";
import ProfileCard from "./ProfileCard.jsx";

export default function ChatFeed({ Messages, height, Username, PersonColor }) {
  return (
    <Stack
      spacing={1}
      width={"100%"}
      height={height != null ? height : "100%"}
      sx={{ scrollBehavior: "inside", overflow: "auto" }}
    >
      <Box width={"100%"}>
        <ProfileCard username={Username} backgroundColor={GlassBackground} />
      </Box>
      {Messages.map((Message) => (
        <ChatBubble
          Image={Message.Image}
          SenderName={Message.senderUserName}
          Text={Message.MessageText}
          Type={Message.Type}
          Time={Message.MessageTime}
          Date={Message.MessageDate}
        />
      ))}
    </Stack>
  );
}
