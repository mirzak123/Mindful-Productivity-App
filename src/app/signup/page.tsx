"use client";

import React, { FormEvent, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";

const SignUpPage = () => {
  const { signUp } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push("/tasks");
    } catch (error) {
      console.error("Sign Up failed:", error);
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
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
              Sign Up
            </Button>
            <Box>
              <Typography variant="body2">
                Already have an account? <Button href="/login">Login</Button>
              </Typography>
            </Box>
          </Box>
        </form>
      </CenterCard>
    </Box>
  );
};

export default SignUpPage;
