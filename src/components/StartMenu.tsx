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

const StartMenu = () => {
  return (
    <Box className="center-card">
      <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
        Mindful Productivity App
      </Typography>
      <List>
        <ListItem component="div" disablePadding>
          <ListItemButton href="/tasks" sx={{ height: 56 }}>
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
          <ListItemButton href="/self-improvement" sx={{ height: 56 }}>
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
          <ListItemButton href="/focus-timer" sx={{ height: 56 }}>
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
          <ListItemButton href="/breathing-exercises" sx={{ height: 56 }}>
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
  );
};

export default StartMenu;
