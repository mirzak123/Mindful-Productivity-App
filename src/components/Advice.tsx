"use client";

import { RestartAltSharp } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState<string>("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
      setAdvice(
        "Something went wrong. Check your internet connection and try again.",
      );
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div>
      <Typography variant="h4" color="primary" marginBottom={2}>
        {advice}
      </Typography>
      <Button onClick={() => fetchAdvice()} variant="contained">
        <RestartAltSharp />
      </Button>
    </div>
  );
};

export default Advice;
