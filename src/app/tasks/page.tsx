"use client";

import HomeButton from "@/components/HomeButton";
import { DeleteOutlineSharp, EditNoteSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";

const TasksPage = () => {
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
      <Box key={index}>
        {index > 0 && <Divider />}
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{task}</Typography>
          <Button onClick={() => removeTask(index)}>
            <DeleteOutlineSharp />
          </Button>
        </ListItem>
      </Box>
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
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <TextField
            fullWidth
            type="text"
            id="task"
            variant="standard"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditNoteSharp />
                </InputAdornment>
              ),
            }}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ width: "35%", marginLeft: 2 }}
          >
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
      <HomeButton />
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
