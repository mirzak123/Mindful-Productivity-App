"use client";

import Advice from "@/components/Advice";
import HomeButton from "@/components/HomeButton";
import { Box, Typography } from "@mui/material";

const SelfImprovement = () => {
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
      <Box className="center-card" sx={{ minHeight: "250px" }}>
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Take some advice
        </Typography>
        <Advice />
      </Box>
    </Box>
  );
};

export default SelfImprovement;
