"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import StartMenu from "@/components/StartMenu";

const HomePage: React.FC = () => {
  return (
    <Box
      className="home-page center-content"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StartMenu />
    </Box>
  );
};

export default HomePage;
