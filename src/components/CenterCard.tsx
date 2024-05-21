import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const CenterCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div layout>
      <motion.div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          minWidth: "450px",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CenterCard;
