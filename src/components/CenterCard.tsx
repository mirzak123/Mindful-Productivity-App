import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const CenterCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        minWidth: {
          xs: "initial", // No minWidth on small screens
          sm: "600px", // minWidth applied on screens larger than 400px
        },
        width: {
          xs: "95%", // Width is 95% on small screens
          sm: "auto", // Auto width on larger screens
        },
        maxWidth: "800px",
        textAlign: "center",
        marginTop: 12,
        marginBottom: 6,
      }}
    >
      {children}
    </Box>
  );
};

export default CenterCard;
