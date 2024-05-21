"use client";

import BreathingExercise from "@/components/BreathingExercise";
import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";
import { Box, Typography } from "@mui/material";

const BreathingExercisesPage = () => {
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
          Breathing Exercises
        </Typography>
        <BreathingExercise />
      </CenterCard>
    </Box>
  );
};

export default BreathingExercisesPage;
