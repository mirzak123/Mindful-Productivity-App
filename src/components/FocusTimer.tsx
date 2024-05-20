"use client";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Countdown from "./Countdown";

const FocusTimer = () => {
  const [time, setTime] = useState<number>(10);

  const renderSelect = () => {
    return (
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={time}
          onChange={(e) => setTime(e.target.value as number)}
          autoWidth
          label="Age"
        >
          <MenuItem value={10}>Ten minutes</MenuItem>
          <MenuItem value={20}>Twenty minutes</MenuItem>
          <MenuItem value={30}>Thirty minues</MenuItem>
          <MenuItem value={60}>One hour</MenuItem>
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
