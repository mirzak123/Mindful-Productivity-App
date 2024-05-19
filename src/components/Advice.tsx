"use client";

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
      <Typography>{advice}</Typography>
      <Button onClick={() => fetchAdvice()}>New Advice</Button>
    </Box>
  );
};

export default Advice;
