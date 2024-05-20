"use client";

import FocusTimer from "@/components/FocusTimer";
import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const FocusTimerPage = () => {
  const router = useRouter();

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
      <Button
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          borderRadius: 28,
        }}
        variant="contained"
        onClick={() => router.push("/")}
      >
        <Home />
      </Button>
      <Box className="center-card">
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Focus Timer
        </Typography>
        <FocusTimer />
      </Box>
    </Box>
  );
};

export default FocusTimerPage;
