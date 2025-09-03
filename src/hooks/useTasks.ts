"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export type Task = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksRef = collection(db, "tasks");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "tasks"),
      (snapshot) => {
        const tasksData = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })) as Task[];
        setTasks(tasksData.sort((a, b) => a.createdAt - b.createdAt));
      }
    );
    return unsubscribe;
  }, []);

  const addTask = async (text: string) => {
    await addDoc(collection(db, "tasks"), {
      text,
      completed: false,
      createdAt: Date.now(),
    });
  };

  const toggleTask = async (id: string, completed: boolean) => {
    await updateDoc(doc(db, "tasks", id), { completed });
  };

  const editTask = async (id: string, text: string) => {
    await updateDoc(doc(db, "tasks", id), { text });
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  return { tasks, addTask, toggleTask, editTask, deleteTask };
}
