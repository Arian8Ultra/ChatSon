import { Box, Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ChatCard() {
  return (
    <Card>
      <Stack py={1}>
        <Box my={1}>
        <Grid container xs={12}>
          <Grid item lg={4}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography>Date</Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography>Time</Typography>
          </Grid>
        </Grid>
        </Box>

        <CardContent>
          <Typography textAlign={"left"}>Text text text</Typography>
        </CardContent>
      </Stack>
    </Card>
  );
}
