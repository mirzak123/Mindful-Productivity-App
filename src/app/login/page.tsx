"use client";

import React, { FormEvent, use, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, 'Password must be at least 6 characters long')
})

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
  }> = async ({ email, password }) => {
    try {
      await login(email, password);
      router.push("/tasks");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{email: string; password: string}>({
    resolver: zodResolver(schema),
  })


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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <TextField
              {...register("email")}
              label={errors.email ? errors.email.message : "Email"}
              error={errors.email ? true : false}
            />
            <TextField
              {...register("password")}
              label={errors.password ? errors.password.message : "Password"}
              error={errors.password ? true : false}
              type="password"
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
