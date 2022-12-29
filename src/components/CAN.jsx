// This component is used to check if the user has the permission to see the component
// importing the necessary components and hooks from react and material-ui
import { Box } from "@mui/system";
import React from "react";
import useAbilityStore from "../stores/AbilityStore";

export default function CAN({ permissionNeeded, children }) {
  // getting the abilities from the ability store
  const zuAbilities = useAbilityStore((state) => state.abilities);
  const abilities = zuAbilities != null ? zuAbilities : [];

  // functions to handle the permission
  const handlePermissionVisibility = () => {
    if (
      abilities.includes(permissionNeeded) ||
      permissionNeeded == null ||
      abilities.includes("admin")
    ) {
      return "visible";
    }
    return "hidden";
  };
  const handlePermissionSize = () => {
    if (
      abilities.includes(permissionNeeded) ||
      permissionNeeded == null ||
      abilities.includes("admin")
    ) {
      return {};
    }
    return 0;
  };
  const handlePermissionDisplay = () => {
    if (
      abilities.includes(permissionNeeded) ||
      permissionNeeded == null ||
      abilities.includes("admin")
    ) {
      return {};
    }
    return "none";
  };

  // returning the component
  return (
    <Box
      visibility={handlePermissionVisibility()}
      margin={0}
      sx={{
        width: handlePermissionSize(),
        height: handlePermissionSize(),
        minWidth: handlePermissionSize(),
        minHeight: handlePermissionSize(),
        fontSize: handlePermissionSize(),
        display: { xs: handlePermissionDisplay() },
      }}
    >
      {children}
    </Box>
  );
}
