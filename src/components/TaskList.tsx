"use client";
import { Task } from "../hooks/useTasks";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  filter: "all" | "active" | "completed";
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskList({ tasks, filter, onToggle, onEdit, onDelete }: Props) {
  const filtered = tasks.filter((t) =>
    filter === "active"
      ? !t.completed
      : filter === "completed"
      ? t.completed
      : true
  );

  return (
    <ul>
      {filtered.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
