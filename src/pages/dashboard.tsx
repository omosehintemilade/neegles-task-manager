import { useState } from "react";
import FilterSection from "../components/FilterSection";
import KanbanBoard from "../components/KanbanBoard";
import { useTasks } from "../context/task";

const Dashboard = () => {
  const { tasks } = useTasks();

  const [filter, setFilter] = useState<string>("");

  // const filteredTasks = tasks.filter(
  //   (task) =>
  //     task.title.toLowerCase().includes(filter.toLowerCase()) ||
  //     task.category.toLowerCase().includes(filter.toLowerCase())
  // );

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager Dashboard</h1>
      <FilterSection setFilter={setFilter} />
      <KanbanBoard tasks={filteredTasks} />
    </div>
  );
};

export default Dashboard;
