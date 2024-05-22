"use client";

import { createTheme } from "@mui/material/styles";
import { pink, purple } from "@mui/material/colors";
import { enUS } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: pink,
      secondary: purple,
    },
  },
  enUS,
);

export default theme;
