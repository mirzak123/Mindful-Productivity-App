"use client";

import Advice from "@/components/Advice";
import CenterCard from "@/components/CenterCard";
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
      <CenterCard>
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Take some advice
        </Typography>
        <Advice />
      </CenterCard>
    </Box>
  );
};

export default SelfImprovement;
