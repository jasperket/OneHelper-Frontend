import apiClient from "./apiClient";
import type { ToDo, ToDoWithId } from "@/models/Todo";

export const getToDos = async (): Promise<ToDo[]> => {
  const response = await apiClient.get<ToDo[]>("/ToDo");
  return response.data;
};

export const createToDo = async (toDo: ToDo): Promise<ToDo> => {
  const response = await apiClient.post<ToDo>("/ToDo", toDo);
  return response.data;
};

export const updateToDo = async (toDo: ToDoWithId): Promise<ToDo> => {
  const response = await apiClient.put<ToDo>(`/ToDo/${toDo.id}`, toDo);
  return response.data;
};

export const deleteToDo = async (id: number): Promise<void> => {
  await apiClient.delete(`/ToDo/${id}`);
};
