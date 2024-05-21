"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import Countdown from "./Countdown";

const FocusTimer = () => {
  const [time, setTime] = useState<number>(10);

  useEffect(() => {
    const timerDefault = localStorage.getItem("timerDefault");
    setTime(timerDefault ? Number(timerDefault) : 10);
  }, []);

  const saveTime = (time: number) => {
    localStorage.setItem("timerDefault", time.toString());
  };

  const handleTimeChange = (e: SelectChangeEvent<number>) => {
    const newTime = e.target.value as number;
    setTime(newTime);
    saveTime(newTime);
  };

  const renderSelect = () => {
    return (
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={time}
          onChange={handleTimeChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={1 / 6}>10 seconds</MenuItem>
          <MenuItem value={0.5}>30 seconds</MenuItem>
          <MenuItem value={10}>10 minutes</MenuItem>
          <MenuItem value={20}>20 minutes</MenuItem>
          <MenuItem value={30}>30 minues</MenuItem>
          <MenuItem value={60}>1 hour</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <Box>
      {renderSelect()}
      <Countdown minutes={time} />
    </Box>
  );
};

export default FocusTimer;
