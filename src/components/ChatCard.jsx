import { Center } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ChatCard({ name, date, time, message, checked, ...rest }) {
  return (
    <Card>
      <Stack py={0}>
        <Box mb={1} py={2} bgcolor='rgba(255,255,255,0.1)'>
          <Grid container xs={12} px={5}>
            <Grid item lg={4} sx={{ display: "flex" }}>
              <Avatar />
              <Box height={"100%"}>
                <Center height={"100%"} pl={15}>
                  <Typography textAlign={"left"} >{name != null ? name : "Name"}</Typography>
                </Center>
              </Box>
            </Grid>

            <Grid item lg={6}></Grid>

            <Grid item lg={1}>
              <Center height={"100%"}>
                <Typography textAlign={"end"} color='gray'>{date != null ? date : "Date"}</Typography>
              </Center>
            </Grid>

            <Grid item lg={1}>
              <Center height={"100%"}>
                <Typography textAlign={"end"} color='gray'>{time != null ? time : "Time"}</Typography>
              </Center>
            </Grid>
          </Grid>
        </Box>

        <CardContent>
          <Typography textAlign={"left"} px={5}>
            {message != null ? message : "Text"}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
}
