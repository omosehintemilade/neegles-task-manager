import { useState } from "react";
import FilterSection, { FIlterType } from "../components/FilterSection";
import KanbanBoard from "../components/KanbanBoard";
import { useTasks } from "../context/task";

const Dashboard = () => {
  const { tasks } = useTasks();

  const [filter, setFilter] = useState<FIlterType>({
    priority: undefined,
    status: undefined
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Task Manager Dashboard</h1>
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
