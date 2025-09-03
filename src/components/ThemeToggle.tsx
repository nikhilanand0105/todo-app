"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setDark(stored === "dark");
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded-lg bg-gray-300 dark:bg-gray-600 text-sm"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
