import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect
} from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskContextType, TaskContextState } from "./types";
import { Task } from "../../types";
import StoreService from "../../utils/store-helper";
import { StoreKeys } from "../../constants";

export const TasksContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const store = new StoreService();
  // SEED DATA
  const [state, setState] = useState<TaskContextState>({
    tasks: store.get(StoreKeys.TASKS, [])
  });

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

  useEffect(() => {
    store.save(StoreKeys.TASKS, state.tasks);
  }, [state.tasks]);

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
