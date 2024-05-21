"use client";

import CenterCard from "@/components/CenterCard";
import FocusTimer from "@/components/FocusTimer";
import HomeButton from "@/components/HomeButton";
import { Box, Typography } from "@mui/material";

const FocusTimerPage = () => {
  return (
    <Box
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
          Focus Timer
        </Typography>
        <FocusTimer />
      </CenterCard>
    </Box>
  );
};

export default FocusTimerPage;
