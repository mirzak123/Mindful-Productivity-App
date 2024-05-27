"use client";

import CenterCard from "@/components/CenterCard";
import HomeButton from "@/components/HomeButton";
import AccountButton from "@/components/AccountButton";
import withAuth from "@/hoc/withAuth";
import { useTasks } from "@/hooks/useTasks";
import {
  DeleteOutlineSharp,
  DragHandle,
  EditNoteSharp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useCallback, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
import { Task } from "@/types/Task";
import { StrictModeDroppable } from "@/components/StrictModeDroppable";

const TasksPage = () => {
  const { tasks, addTask, deleteTask, updateTaskOrder } = useTasks();

  const [task, setTask] = useState<string>("");

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const reorderedTasks = Array.from(tasks); // Make a copy
      const [removed] = reorderedTasks.splice(result.source.index, 1);
      reorderedTasks.splice(result.destination.index, 0, removed);

      updateTaskOrder(reorderedTasks); // Update task order in database
    },
    [tasks, updateTaskOrder],
  );

  const renderTasks = () => {
    return tasks.map((task: Task, index: number) => (
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {(provided: DraggableProvided) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{ marginBottom: 2 }}
          >
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box {...provided.dragHandleProps}>
                <DragHandle />
              </Box>
              <Typography>{task.title}</Typography>
              <Button onClick={() => deleteTask(task.id)}>
                <DeleteOutlineSharp />
              </Button>
            </ListItem>
          </Box>
        )}
      </Draggable>
    ));
  };

  const renderTaskForm = () => {
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!task) return;
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
      <AccountButton />
      <CenterCard>
        <Typography variant="h4" marginBottom={4} fontWeight={"bold"}>
          Tasks
        </Typography>
        {renderTaskForm()}
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable droppableId="taskList">
            {(provided: DroppableProvided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {renderTasks()}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </CenterCard>
    </Box>
  );
};

export default withAuth(TasksPage);
