import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskContextType, TaskContextState } from "./types";
import { EnumPriority, EnumStatus, Task } from "../../types";

export const TasksContext = createContext<TaskContextType | undefined>(
  undefined
);

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    title: "Complete Project Proposal",
    description: "Draft and submit the project proposal document.",
    status: EnumStatus.PENDING,
    priority: EnumPriority.HIGH
  },
  {
    id: uuidv4(),
    title: "Prepare Presentation",
    description: "Create slideuuidv4(),or the upcoming client presentation.",
    status: EnumStatus.ONGOING,
    priority: EnumPriority.MEDIUM
  },
  {
    id: uuidv4(),
    title: "Update Website Content",
    description: "Revise and update outdated content on the company website.",
    status: EnumStatus.COMPLETED,
    priority: EnumPriority.LOW
  },
  {
    id: uuidv4(),
    title: "Team Meeting",
    description: "Schedule and conduct the weekly team sync-up.",
    status: EnumStatus.PENDING,
    priority: EnumPriority.MEDIUM
  },
  {
    id: uuidv4(),
    title: "Fix Bug #1234",
    description: "Resolve the login issue reported in bug #1234.",
    status: EnumStatus.ONGOING,
    priority: EnumPriority.HIGH
  },
  {
    id: uuidv4(),
    title: "Conduct Code Review",
    description: "Review the code submitted by the development team.",
    status: EnumStatus.COMPLETED,
    priority: EnumPriority.MEDIUM
  },
  {
    id: uuidv4(),
    title: "Plan Marketing Campaign",
    description: "Strategize the next quarter's marketing initiatives.",

    status: EnumStatus.PENDING,
    priority: EnumPriority.HIGH
  },
  {
    id: uuidv4(),
    title: "Organize Workshop",
    description: "Coordinate logistics for the upcoming technical workshop.",
    status: EnumStatus.ONGOING,
    priority: EnumPriority.LOW
  },
  {
    id: uuidv4(),
    title: "Prepare Financial Report",
    description: "Compile and analyze the quarterly financial data.",
    status: EnumStatus.PENDING,
    priority: EnumPriority.HIGH
  },
  {
    id: uuidv4(),
    title: "Employee Feedback Session",
    description: "Conduct feedback sessions with team members.",
    status: EnumStatus.COMPLETED,
    priority: EnumPriority.MEDIUM
  }
];

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  // SEED DATA
  const [state, setState] = useState<TaskContextState>({ tasks: initialTasks });

  const value = useMemo(
    () => ({
      ...state,
      addTask: (task: Omit<Task, "id">) => {
        const newTask: Task = {
          ...task,
          id: uuidv4()
        };
        setState((prev) => ({ ...prev, tasks: [...prev.tasks, newTask] }));
      },

      removeTask: (id: string) => {
        setState((prev) => ({
          ...prev,
          tasks: prev.tasks.filter((task) => task.id !== id)
        }));
      },

      updateTask: (taskId: string, data: Partial<Task>) => {
        setState((prev) => ({
          ...prev,
          tasks: prev.tasks.map((task) =>
            task.id === taskId ? { ...task, ...data } : task
          )
        }));
      }
    }),
    [state]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    // <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksContext Provider");
  }
  return context;
};
