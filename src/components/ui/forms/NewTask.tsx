import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Textarea } from "../textarea";

export default function NewTask() {
  return (
    <form className="rounded-xl bg-gray-200 p-8 text-gray-700">
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
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="type">Type *</Label>
            <Input
              className="bg-gray-50"
              id="type"
              name="type"
              type="text"
              placeholder="Enter task type"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="start">Start Time *</Label>
            <input
              type="datetime-local"
              className="rounded-lg bg-gray-50 p-1.5"
              id="title"
              name="start"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="end">End Time *</Label>
            <input
              type="datetime-local"
              className="rounded-lg bg-gray-50 p-1.5"
              id="end"
              name="end"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="bg-gray-50"
            id="description"
            name="description"
            placeholder="Enter task description (optional)"
          />
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        <Button className="bg-themeGreen flex-1 cursor-pointer hover:bg-green-700">
          Create Task
        </Button>
        <Button className="flex-1 cursor-pointer border-2 border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-gray-50">
          Cancel
        </Button>
      </div>
    </form>
  );
}
