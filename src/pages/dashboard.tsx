import { useState } from "react";
import FilterSection, { FIlterType } from "../components/FilterSection";
import KanbanBoard from "../components/KanbanBoard";
import { useTasks } from "../context/task";
import { useTheme } from "../context/theme";
import { Moon, Sun } from "lucide-react";

const Dashboard = () => {
  const { tasks } = useTasks();
  const { theme, toggleTheme } = useTheme();

  const [filter, setFilter] = useState<FIlterType>({
    priority: undefined,
    status: undefined
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Manager Dashboard</h1>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>
      <FilterSection
        setFilter={(val) => setFilter((prev) => ({ ...prev, ...val }))}
      />
      <KanbanBoard
        tasks={tasks.filter((task) => {
          const matchesStatus = filter.status
            ? task.status === filter.status
            : true;
          const matchesPriority = filter.priority
            ? task.priority === filter.priority
            : true;
          return matchesStatus && matchesPriority;
        })}
      />
    </div>
  );
};

export default Dashboard;
