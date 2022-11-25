import { Center } from "@chakra-ui/react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChatCard from "../../components/ChatCard";

export default function HomePage() {
  return (
      <Box width={"100%"}>
        <Stack spacing={2}>
          <ChatCard
            name={"Arian Rezaei"}
            date='1/1/1401'
            time={"7:30"}
            message='this is a test for this shit'
          />
          <ChatCard />
          <ChatCard />
        </Stack>
      </Box>
  );
}
