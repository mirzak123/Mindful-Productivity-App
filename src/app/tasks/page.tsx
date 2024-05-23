"use client";

import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";
import LogoutButton from "@/components/LogoutButton";
import withAuth from "@/hoc/withAuth";
import { useTasks } from "@/hooks/useTasks";
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
import { FormEvent, useState } from "react";

const TasksPage = () => {
  const { tasks, addTask, deleteTask } = useTasks();

  const [task, setTask] = useState<string>("");
  //
  // const addTask = (task: string) => {
  //   if (!task) return;
  //   setTasks([...tasks, task]);
  // };
  //
  // const removeTask = (index: number) => {
  //   setTasks(tasks.filter((_, i) => i !== index));
  // };

  const renderTasks = () => {
    return tasks.map((task, index) => (
      <Box key={task.id}>
        {index > 0 && <Divider />}
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{task.title}</Typography>
          <Button onClick={() => deleteTask(task.id)}>
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
      <LogoutButton />
      <CenterCard>
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Tasks
        </Typography>
        {renderTaskForm()}
        {renderTasks()}
      </CenterCard>
    </Box>
  );
};

export default withAuth(TasksPage);
