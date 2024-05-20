import { Box, Typography } from "@mui/material";
import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"] });

interface CountdownProps {
  minutes: number;
}

const Countdown: React.FC<CountdownProps> = ({ minutes }) => {
  const [seconds, setSeconds] = useState<number>(minutes * 60);

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
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const { minutes: formattedMinutes, seconds: formattedSeconds } = renderTime();

  return (
    <Box
      className={orbitron.className}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "6rem",
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
  );
};

export default Countdown;
