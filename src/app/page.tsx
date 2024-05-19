"use client";

import React from "react";
import {
  Typography,
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Air,
  ChecklistRtl,
  SelfImprovementSharp,
  Timelapse,
} from "@mui/icons-material";
import { Home } from "@mui/icons-material";

const HomePage: React.FC = () => {
  return (
    <Box
      className="home-page"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="start-menu">
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Mindful Productivity App
        </Typography>
        <List>
          <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <ChecklistRtl color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Task List"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <SelfImprovementSharp color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Self Improvement"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <Timelapse color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Focus Timer"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <Air color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Breathing Exercises"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default HomePage;
