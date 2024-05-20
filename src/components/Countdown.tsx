import { Box, Button, Typography } from "@mui/material";
import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"] });

interface CountdownProps {
  minutes: number;
}

const Countdown: React.FC<CountdownProps> = ({ minutes }) => {
  const [seconds, setSeconds] = useState<number>(minutes * 60);
  const [running, setRunning] = useState<boolean>(false);

  const tick = () => {
    setSeconds((prev) => prev - 1);
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const renderTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return {
      minutes: formatTime(minutes),
      seconds: formatTime(remainingSeconds),
    };
  };

  useEffect(() => {
    setSeconds(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    let interval = setInterval(tick, 1000);
    if (seconds <= 0) {
      setRunning(false);
      clearInterval(interval);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, seconds]);

  const { minutes: formattedMinutes, seconds: formattedSeconds } = renderTime();

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(minutes * 60);
  };

  const renderControls = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="contained"
          onClick={handleStart}
          disabled={running || seconds <= 0}
        >
          Start
        </Button>
        <Button variant="contained" onClick={handlePause} disabled={!running}>
          Pause
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Box
        className={orbitron.className}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "6rem",
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        {formattedMinutes.split("").map((digit: string, index: number) => (
          <Typography
            className={`${orbitron.className} timer-digit`}
            key={`min-${index}`}
            component="span"
            color="primary"
          >
            {digit}
          </Typography>
        ))}
        <Typography
          className={`${orbitron.className} timer-digit`}
          component="span"
          color="primary"
        >
          :
        </Typography>
        {formattedSeconds.split("").map((digit: string, index: number) => (
          <Typography
            className={`${orbitron.className} timer-digit`}
            key={`sec-${index}`}
            component="span"
            color="primary"
          >
            {digit}
          </Typography>
        ))}
      </Box>
      {renderControls()}
    </>
  );
};

export default Countdown;
