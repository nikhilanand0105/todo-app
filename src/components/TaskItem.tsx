"use client";
import { useState } from "react";
import { Task } from "../hooks/useTasks";

type Props = {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onEdit, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(task.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded-lg mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id, !task.completed)}
          className="cursor-pointer"
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="p-1 rounded-md border"
          />
        ) : (
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="text-sm px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
