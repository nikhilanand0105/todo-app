"use client";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import ThemeToggle from "../components/ThemeToggle";

export default function HomePage() {
  const { tasks, addTask, toggleTask, editTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-6 max-w-xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">To-Do App</h1>
        <ThemeToggle />
      </header>

      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </main>
  );
}
