"use client";

import { DeleteOutlineSharp, Home } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const TasksPage = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) setTasks(JSON.parse(tasks));
  }, []);

  const addTask = (task: string) => {
    if (!task) return;
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((_, i) => i !== index)),
    );
  };

  const clearTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const renderTasks = () => {
    return tasks.map((task, index) => (
      <>
        {index > 0 && <Divider />}
        <ListItem
          key={index}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>{task}</Typography>
          <Button onClick={() => removeTask(index)}>
            <DeleteOutlineSharp />
          </Button>
        </ListItem>
      </>
    ));
  };

  const renderTaskForm = () => {
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      addTask(task);
      setTask("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <TextField
            type="text"
            variant="standard"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button color="primary" variant="contained" type="submit">
            Add Task
          </Button>
        </Box>
      </form>
    );
  };

  return (
    <Box
      className="center-content"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Button
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          borderRadius: 28,
        }}
        variant="contained"
        onClick={() => router.push("/")}
      >
        <Home />
      </Button>
      <Box className="center-card">
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Tasks
        </Typography>
        {renderTaskForm()}
        {renderTasks()}
      </Box>
    </Box>
  );
};

export default TasksPage;
