// Description: This component is used to create a custom card with a glass effect
// importing the necessary components and hooks from react and material-ui
import { Card } from "@mui/material";
import React from "react";
import { GlassBackgroundDark } from "../../theme/Colors";
import { borderRadiuos } from "../../theme/Themes";

function CustomCard({ children, backgroundColor, padding }) {
  // returning the card component
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: borderRadiuos,
        p: padding != null ? padding : 2,
        backgroundColor: backgroundColor != null ? backgroundColor : GlassBackgroundDark,
        backdropFilter: "blur(8px)",
        border: 0,
        display: "flex",
      }}
    >
      {children}
    </Card>
  );
}

export default CustomCard;
