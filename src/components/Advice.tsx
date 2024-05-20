"use client";

import { RestartAltSharp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState<string>("");

  const fetchAdvice = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="primary" marginBottom={2}>
        {advice}
      </Typography>
      <Button onClick={() => fetchAdvice()}>
        <RestartAltSharp />
      </Button>
    </Box>
  );
};

export default Advice;
