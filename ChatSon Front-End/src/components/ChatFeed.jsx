import { Stack } from "@mui/system";
import React from "react";
import ChatBubble from "./ChatBubble.jsx";

export default function ChatFeed({ Messages, height }) {
  return (
    <Stack
      spacing={1}
      width={"100%"}
      height={height != null ? height : "100%"}
      sx={{ scrollBehavior: "inside", overflow: "auto" }}
    >
      {Messages.map((Message) => (
        <ChatBubble
          Image={Message.Image}
          SenderName={Message.senderUserName}
          Text={Message.MessageText}
          Type={Message.Type}
        />
      ))}
    </Stack>
  );
}
