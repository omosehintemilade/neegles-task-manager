import { Task } from "../../types";

export interface TaskContextType {
  tasks: Task[];
  //
  addTask: (task: Omit<Task, "id">) => void;
  updateTask: (taskId: string, data: Partial<Task>) => void;
  removeTask: (id: string) => void;
}

export interface TaskContextState {
  tasks: Task[];
}
