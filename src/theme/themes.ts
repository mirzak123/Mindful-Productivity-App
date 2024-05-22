"use client";

import { createTheme } from "@mui/material/styles";
import { pink, purple, blue, green } from "@mui/material/colors";
import { enUS } from "@mui/material/locale";

const themes = {
  pink: createTheme(
    {
      palette: {
        mode: "light",
        primary: pink,
        secondary: purple,
      },
    },
    enUS,
  ),
  blue: createTheme(
    {
      palette: {
        mode: "light",
        primary: blue,
        secondary: green,
      },
    },
    enUS,
  ),
  green: createTheme(
    {
      palette: {
        mode: "light",
        primary: green,
        secondary: blue,
      },
    },
    enUS,
  ),
};

export default themes;
