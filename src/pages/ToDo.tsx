import AuthHeader from "@/components/layout/AuthHeader";
import { Button } from "@/components/ui/button";
import NewTask from "@/components/todo/NewTask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import TaskList from "@/components/todo/TaskList";
import { useCallback, useEffect, useState } from "react";
import { getToDos } from "@/services/toDoClient";
import type { ToDoWithId } from "@/models/Todo";

export default function ToDoPage() {
  const [tasks, setTasks] = useState<ToDoWithId[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getToDos();
      // Backend may return ToDo[] without id; if so, adjust typing. Assuming id is present.
      setTasks(data as unknown as ToDoWithId[]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <>
      <AuthHeader>
        <div className="grid grid-cols-2 gap-32 text-gray-700">
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

              {/* Task List */}
              {loading ? (
                <div className="mt-8 rounded-lg bg-gray-50 p-6 text-center text-gray-500">
                  Loading tasks...
                </div>
              ) : (
                <TaskList items={tasks} onRefresh={loadTasks} />
              )}
            </div>
          </div>
          <NewTask onCreated={loadTasks} />
        </div>
      </AuthHeader>
    </>
  );
}
