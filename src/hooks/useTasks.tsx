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
} from "firebase/firestore";
import { useAuth } from "./useAuth";

interface Task {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
}

interface TasksContextType {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
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
  console.log("from tasks", user);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!loading && user) {
      const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
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
    });
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};