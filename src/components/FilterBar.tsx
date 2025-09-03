"use client";

type Props = {
  filter: "all" | "active" | "completed";
  setFilter: (f: "all" | "active" | "completed") => void;
};

export default function FilterBar({ filter, setFilter }: Props) {
  const options: ("all" | "active" | "completed")[] = ["all", "active", "completed"];

  return (
    <div className="flex gap-2 my-4">
      {options.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-lg ${
            filter === f ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
