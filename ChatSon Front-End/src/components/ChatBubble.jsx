import { Flex, ring, Spacer } from "@chakra-ui/react";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { GlassBackgroundLight, GlassPrimary, primaryLight } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";

export default function ChatBubble({ Type, Text, Image, SenderName, Time, Date, ...rest }) {
  const backgroundColor = () => {
    if (Type == "My") {
      return GlassPrimary;
    }
    return GlassBackgroundLight;
  };
  const display = () => {
    if (Type == "My") {
      return "none";
    }
    return "block";
  };
  const Mydisplay = () => {
    if (Type == "My") {
      return "block";
    }
    return "none";
  };
  return (
    <Flex width={"100%"}>
      <Box
        maxWidth={"70%"}
        sx={{
          backgroundColor: backgroundColor,
          height: "max-content",
          padding: 2,
          borderRadius: borderRadiuos,
          display: { xs: display() },
        }}
      >
        <Typography variant='subtitle2' textAlign={"start"}>
          {Type === "My" ? "" : SenderName}
        </Typography>
        <Divider />
        <Typography variant='body1' textAlign={"start"}>
          {Text}
        </Typography>

        <Box display={"flex"}>
          <Typography
            fontSize={"12px"}
            textAlign={"start"}
            mx={1}
            sx={{ color: primaryLight }}
          >
            {Date}
          </Typography>
          <Typography fontSize={"12px"} textAlign={"start"} >
            {Time}
          </Typography>
        </Box>
      </Box>

      <Spacer />
      <Box
        maxWidth={"70%"}
        sx={{
          backgroundColor: backgroundColor,
          height: "max-content",
          padding: 2,
          borderRadius: borderRadiuos,
          display: { xs: Mydisplay() },
        }}
      >
        <Typography variant='subtitle2' textAlign={"start"}>
          {Type === "My" ? "" : SenderName}
        </Typography>

        <Typography variant='body1' textAlign={"start"}>
          {Text}
        </Typography>

        <Box display={"flex"}>
          <Typography
            fontSize={"12px"}
            textAlign={"start"}
            mx={1}
            sx={{ color: primaryLight }}
          >
            {Date}
          </Typography>
          <Typography fontSize={"12px"} textAlign={"start"}>
            {Time}
          </Typography>
        </Box>
      </Box>
    </Flex>
  );
}
