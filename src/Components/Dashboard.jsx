// import "../Styles/Components/Dashboard.css";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";

import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
// import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const handleDrawerOpen = () => setOpen(!open);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          width: open ? "calc(100% - 240px)" : "100%",
          marginLeft: open ? drawerWidth + "px" : "0px",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className="custom-sidebar"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div className="sidebar-top-icon">
              <img className="sidebar-image" src="/icons/mstile-144x144.png" />
              <Typography className="sidebar-top-icon-Typo">Avatar</Typography>
            </div>
          </Box>
        </DrawerHeader>

        <div className="sidebar">
          <List className="top-sidebar">
            {["Users", "Chat", "Option"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  className={activeButton === text ? "active-button" : ""}
                  onClick={() => handleButtonClick(text)}
                >
                  <ListItemIcon
                    className={activeButton === text ? "active-icon" : ""}
                  >
                    {index === 0 ? (
                      <HomeIcon />
                    ) : index === 1 ? (
                      <ChatIcon />
                    ) : index === 2 ? (
                      <HomeIcon />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List
            className="down-sidebar"
            sx={{ flex: 1, overflowY: "auto", marginBottom: 0 }}
          >
            {["Setting", "Help", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  className={activeButton === text ? "active-button" : ""}
                  onClick={() => handleButtonClick(text)}
                >
                  <ListItemIcon
                    className={activeButton === text ? "active-icon" : ""}
                  >
                    {index === 0 ? (
                      <SettingsIcon />
                    ) : index === 1 ? (
                      <HelpIcon />
                    ) : index === 2 ? (
                      <HomeIcon />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <Box
        component="div"
        sx={{
          border: "1px solid red",
          height: "calc(100% - 64px)",
          //   backgroundColor: "lightgrey",
          overflowY: "scroll",
          width: open ? "calc(100% - 240px)" : "100%",
          marginLeft: open ? drawerWidth + "px" : "0px",
        }}
      >
        {/* <Outlet /> */}
      </Box>
    </Box>
  );
}
