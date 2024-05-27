"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { db } from "../../firebase.config";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  writeBatch,
  orderBy,
} from "firebase/firestore";
import { useAuth } from "./useAuth";
import { Task } from "@/types/Task";

interface TasksContextType {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTaskOrder: (tasks: Task[]) => Promise<void>;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!loading && user) {
      const q = query(
        collection(db, "tasks"),
        where("userId", "==", user.uid),
        orderBy("order"),
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tasksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Task[];
        setTasks(tasksData);
      });
      return () => unsubscribe();
    }
  }, [loading, user]);

  const addTask = async (title: string) => {
    if (!loading && !user) throw new Error("User not authenticated");
    await addDoc(collection(db, "tasks"), {
      title,
      userId: user?.uid,
      createdAt: new Date().toISOString(),
      order: tasks.length,
    });
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const updateTaskOrder = async (tasks: Task[]) => {
    const batch = writeBatch(db);
    tasks.forEach((task, index) => {
      const taskRef = doc(db, "tasks", task.id);
      batch.update(taskRef, { order: index });
    });
    await batch.commit();
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask, updateTaskOrder }}
    >
      {children}
    </TasksContext.Provider>
  );
};
