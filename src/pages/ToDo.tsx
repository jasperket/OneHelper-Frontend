import AuthHeader from "@/components/layout/AuthHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Plus, Trash2 } from "lucide-react";

export default function ToDoPage() {
  return (
    <>
      <AuthHeader />
      <main className="mx-auto grid max-w-7xl grid-cols-2 gap-32 p-4 pt-8 text-gray-700">
        <div>
          <h1 className="text-5xl font-extrabold">
            <span className="text-orange-400">To-Do</span>{" "}
            <span className="text-green-400">List</span>
          </h1>
          <div className="mt-4 space-y-4 rounded-xl bg-gray-200 p-4 text-black">
            <div className="flex justify-between">
              <Select defaultValue="all">
                <SelectTrigger className="w-48 bg-gray-50 text-gray-900">
                  <SelectValue placeholder="All Tasks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tasks</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-themeOrange cursor-pointer hover:bg-orange-600">
                <Plus />
                New Task
              </Button>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-gray-50 p-4 text-gray-700">
                <Checkbox className="data-[state=checked]:bg-themeOrange data-[state=checked]: data-[state=checked]:border-themeOrange border-themeOrange" />
                <div className="flex-1">
                  <p className="text-lg font-bold">Title is here</p>
                  <p className="text-sm text-gray-500">Description is here</p>
                </div>
                <div className="flex gap-4">
                  <Pencil />
                  <Trash2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-gray-200 p-8 text-gray-700">
          <h2 className="text-2xl font-extrabold">Add Task</h2>
        </div>
      </main>
    </>
  );
}
