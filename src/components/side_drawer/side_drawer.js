import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";

import { sidebarLinks } from "./side_drawer_links";
import SidebarProfileName from "../sidebar_profile_name/sidebar_profile_name";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: theme.palette.secondary.light,
  padding: "22px 0",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

const SideDrawer = ({ open }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <Box
      sx={{
        width: `${open ? `${drawerWidth}px` : "0px"}`,
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: theme.palette.secondary.light,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.png`}
              width="52px"
              height="46px"
              alt="logo"
            />
          </Link>
        </DrawerHeader>
        <Divider sx={{ borderColor: "#363638" }} />
        <SidebarProfileName />
        <List sx={{ height: "100%", backgroud: theme.palette.secondary.light }}>
          {sidebarLinks.map((link, index) => {
            const isHome = pathname === "/home" && link.path === "/";
            const pathnameWithoutSlash = pathname.split("/")[1];
            const pathWithoutSlash = link.path.split("/")[1];

            return (
              <React.Fragment key={index}>
                <ListItem
                  className={`${
                    isHome || pathnameWithoutSlash === pathWithoutSlash
                      ? "active"
                      : ""
                  }`}
                  onClick={() => navigate(link.path, { replace: true })}
                  button
                  key={link.id}
                  sx={{
                    padding: "4% 14%",
                    position: "relative",
                    "&.active": {
                      background:
                        "linear-gradient(90deg, rgba(171, 69, 231, 0.24) 0%, rgba(171, 69, 231, 0) 146.65%)",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        width: "6px",
                        height: "100%",
                        left: "0",
                        background: "#B148EA",
                      },
                    },
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, rgba(171, 69, 231, 0.24) 0%, rgba(171, 69, 231, 0) 146.65%)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "38px" }}>
                    <img src={link.icon} alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary={link.label}
                    sx={{ color: "#fff", opacity: "0.6" }}
                  />
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
};

export default SideDrawer;
