import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import SideDrawer from "../side_drawer/side_drawer";
import { Outlet } from "react-router-dom";
import TopBar from "../top_bar/top_bar";
import { usePlayer } from "../../context/playerContext";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const { isActive } = usePlayer();
  const handleDrawerNavigation = () => {
    setOpen(!open);
  };

  return (
    <Stack direction="row" style={isActive ? { overflow: "hidden" } : {}}>
      <SideDrawer open={open} />
      <Box
        flex={1}
        sx={{
          background: "#0C0B10",
          height: "100vh",
          overflow: "auto",
          minWidth: "1200px",
        }}
      >
        <TopBar open={open} handleDrawerOpen={handleDrawerNavigation} />
        <Box py={3} px={4}>
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};

export default MainLayout;
