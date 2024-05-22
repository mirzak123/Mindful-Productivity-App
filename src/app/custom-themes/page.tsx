"use client";

import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeContext";
import { blue, green, pink } from "@mui/material/colors";

const CustomThemesPage = () => {
  const { changeTheme } = useTheme();

  return (
    <Box
      className="center-content"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <HomeButton />
      <CenterCard>
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Change Theme
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            onClick={() => changeTheme("pink")}
            variant="contained"
            sx={{
              backgroundColor: pink[500],
              "&:hover": {
                backgroundColor: pink[700],
              },
            }}
          >
            Pink
          </Button>
          <Button
            onClick={() => changeTheme("blue")}
            variant="contained"
            sx={{
              backgroundColor: blue[500],
              "&:hover": { backgroundColor: blue[700] },
            }}
          >
            Blue
          </Button>
          <Button
            onClick={() => changeTheme("green")}
            variant="contained"
            sx={{
              backgroundColor: green[500],
              "&:hover": {
                backgroundColor: green[700],
              },
            }}
          >
            Green
          </Button>
        </Box>
      </CenterCard>
    </Box>
  );
};

export default CustomThemesPage;
