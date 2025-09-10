import { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { ToDo } from "@/models/Todo";
import { validateToDo } from "@/lib/todoValidation";
import { createToDo } from "@/services/toDoClient";

interface NewTaskProps {
  onCreated?: () => void;
  taskTypes: string[];
  setTaskTypes: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function NewTask({
  onCreated,
  taskTypes,
  setTaskTypes,
}: NewTaskProps) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<string>("0");
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<{
    title?: string;
    type?: string;
    start?: string;
    end?: string;
  }>({});

  // 🔑 for adding new type
  const [newType, setNewType] = useState("");

  const handleAddType = () => {
    if (newType.trim() && !taskTypes.includes(newType)) {
      setTaskTypes((prev) => [...prev, newType]);
      setType(newType); // auto select new type
      setNewType("");
    }
  };

  const validate = () => {
    const nextErrors = validateToDo({ title, type, start, end });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const clearFields = () => {
    setTitle("");
    setType("");
    setStart("");
    setEnd("");
    setDescription("");
    setPriority("0");
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    const payload: ToDo = {
      title: title.trim(),
      description: description.trim() || undefined,
      toDoType: type.trim(),
      startTime: new Date(start).toISOString(),
      endTime: new Date(end).toISOString(),
      priorityLevel: Number(priority),
      isCompleted: false,
      userId: 1,
    };
    try {
      setBusy(true);
      await createToDo(payload);
      clearFields();
      onCreated?.();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-2xl bg-gray-100 p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">New Task</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-3 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
        required
      />

      {/* Type */}
      <div className="mb-3">
        <label className="mb-1 block font-medium">Type *</label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-full bg-white capitalize">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {taskTypes.map((t) => (
              <SelectItem key={t} value={t} className="capitalize">
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Input + Add button */}
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            placeholder="Input Task Type"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 bg-gray-50 p-2"
          />
          <Button
            type="button"
            onClick={handleAddType}
            className="cursor-pointer bg-green-500 text-white hover:bg-green-600"
          >
            Add
          </Button>
        </div>
      </div>

      {/* Priority */}
      <div className="mb-3">
        <label className="mb-1 block font-medium">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-gray-50 p-2"
        >
          <option value="0">None</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>

      {/* Start & End Time */}
      <div className="mb-3 grid grid-cols-2 gap-2">
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="rounded-md border border-gray-300 bg-gray-50 p-2"
        />
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="rounded-md border border-gray-300 bg-gray-50 p-2"
        />
      </div>

      {/* Description */}
      <textarea
        placeholder="Enter task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-3 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={handleSubmit}
          className="flex-1 cursor-pointer bg-green-500 text-white hover:bg-green-600"
        >
          Create Task
        </Button>
        <Button
          variant="outline"
          className="flex-1 cursor-pointer border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-gray-50"
          onClick={clearFields}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
