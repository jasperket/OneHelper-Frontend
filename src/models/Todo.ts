// This interface represents the structure of a ToDo item, matching the ToDoRequest record from the backend.
// The types are chosen to align with the ASP.NET Core model, including nullable and non-nullable fields.

export interface ToDoWithId {
  id: number;
  title: string;
  description?: string; // optional, matches string? in C#
  toDoType: string;
  startTime: string; // DateTime in C# is typically represented as ISO string in TypeScript
  endTime: string;
  priorityLevel: number;
  isCompleted: boolean;
  userId: number;
}

export interface ToDo {
  title: string;
  description?: string; // optional, matches string? in C#
  toDoType: string;
  startTime: string; // DateTime in C# is typically represented as ISO string in TypeScript
  endTime: string;
  priorityLevel: number;
  isCompleted: boolean;
  userId: number;
}
