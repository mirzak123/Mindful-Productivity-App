import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/theme/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindful Productivity App",
  description: "A productivity app for mindful people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
