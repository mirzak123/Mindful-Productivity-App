"use client";

import Advice from "@/components/Advice";
import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const SelfImprovement = () => {
  const router = useRouter();

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
      <Box className="center-card" sx={{ minHeight: "250px" }}>
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Self Improvement
        </Typography>
        <Advice />
      </Box>
    </Box>
  );
};

export default SelfImprovement;
