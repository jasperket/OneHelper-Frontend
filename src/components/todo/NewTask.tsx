import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { createToDo } from "@/services/toDoClient";
import type { ToDo } from "@/models/Todo";

interface NewTaskProps {
  onCreated?: () => void;
}

export default function NewTask({ onCreated }: NewTaskProps) {
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

  const validate = () => {
    const nextErrors: {
      title?: string;
      type?: string;
      start?: string;
      end?: string;
    } = {};
    if (!title.trim()) nextErrors.title = "Title is required";
    if (!type.trim()) nextErrors.type = "Type is required";
    if (!start) nextErrors.start = "Start time is required";
    if (!end) nextErrors.end = "End time is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
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
      setTitle("");
      setType("");
      setStart("");
      setEnd("");
      setDescription("");
      setPriority("0");
      onCreated?.();
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-gray-200 p-8 text-gray-700"
    >
      <h2 className="text-2xl font-bold">New Task</h2>
      <div className="mt-8 space-y-6">
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              className="bg-gray-50"
              id="title"
              name="title"
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title && e.target.value.trim())
                  setErrors((p) => ({ ...p, title: undefined }));
              }}
              required
            />
            {errors.title ? (
              <span className="text-sm text-red-600">{errors.title}</span>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="type">Type *</Label>
            <Input
              className="bg-gray-50"
              id="type"
              name="type"
              type="text"
              placeholder="Enter task type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                if (errors.type && e.target.value.trim())
                  setErrors((p) => ({ ...p, type: undefined }));
              }}
              required
            />
            {errors.type ? (
              <span className="text-sm text-red-600">{errors.type}</span>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="priority">Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger id="priority" className="bg-gray-50 text-gray-900">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">None</SelectItem>
                <SelectItem value="1">Low</SelectItem>
                <SelectItem value="2">Medium</SelectItem>
                <SelectItem value="3">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="start">Start Time *</Label>
            <input
              type="datetime-local"
              className="rounded-lg bg-gray-50 p-1.5"
              id="start"
              name="start"
              value={start}
              onChange={(e) => {
                setStart(e.target.value);
                if (errors.start)
                  setErrors((p) => ({ ...p, start: undefined }));
              }}
              required
            />
            {errors.start ? (
              <span className="text-sm text-red-600">{errors.start}</span>
            ) : null}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="end">End Time *</Label>
            <input
              type="datetime-local"
              className="rounded-lg bg-gray-50 p-1.5"
              id="end"
              name="end"
              value={end}
              onChange={(e) => {
                setEnd(e.target.value);
                if (errors.end) setErrors((p) => ({ ...p, end: undefined }));
              }}
              required
            />
            {errors.end ? (
              <span className="text-sm text-red-600">{errors.end}</span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="bg-gray-50"
            id="description"
            name="description"
            placeholder="Enter task description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        <Button
          type="submit"
          disabled={busy}
          className="bg-themeGreen flex-1 cursor-pointer hover:bg-green-700"
        >
          Create Task
        </Button>
        <Button
          type="button"
          disabled={busy}
          className="flex-1 cursor-pointer border-2 border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-gray-50"
          onClick={() => {
            setTitle("");
            setType("");
            setStart("");
            setEnd("");
            setDescription("");
            setPriority("0");
            setErrors({});
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
