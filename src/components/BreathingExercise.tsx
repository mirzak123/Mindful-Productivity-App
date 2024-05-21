import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Typography, useTheme } from "@mui/material";

const BreathingExercise: React.FC = () => {
  const controls = useAnimation();
  const theme = useTheme();
  const isMounted = useRef(true);
  const [text, setText] = useState<string>("Inhale");

  useEffect(() => {
    isMounted.current = true;

    const breathingSequence = async () => {
      while (isMounted.current) {
        setText("Inhale");
        await controls.start({ scale: 1.5, transition: { duration: 4 } }); // Inhale
        if (!isMounted.current) return;
        setText("Hold");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Hold
        setText("Exhale");
        await controls.start({ scale: 1, transition: { duration: 4 } }); // Exhale
        if (!isMounted.current) return;
        setText("Hold");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Hold
      }
    };

    breathingSequence();
    return () => {
      isMounted.current = false;
    };
  }, [controls]);

  const pulseAnimation = {
    scale: [2, 1, 2],
    opacity: [0.5, 0, 0],
    transition: {
      delay: 6,
      duration: 10,
      repeat: Infinity,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        position: "relative",
      }}
    >
      {/* Pulsating background circle */}
      <motion.div
        style={{
          width: 100,
          height: 100,
          opacity: 0.5,
          scale: 2,
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
          position: "absolute",
        }}
      />
      {/* Main scaling circle */}
      <motion.div
        animate={controls}
        initial={{ scale: 1 }}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
        }}
      />
      {/* Centered text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          key={text} // This key ensures Framer Motion treats each text change as a separate element
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
            }}
          >
            {text}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default BreathingExercise;
