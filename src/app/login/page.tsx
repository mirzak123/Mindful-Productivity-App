"use client";

import React, { FormEvent, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/tasks");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <HomeButton />
      <CenterCard>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
            <Box>
              <Typography variant="body2">
                Don&apos;t have an account?{" "}
                <Button href="/signup">Sign Up</Button>
              </Typography>
            </Box>
          </Box>
        </form>
      </CenterCard>
    </Box>
  );
};

export default LoginPage;
