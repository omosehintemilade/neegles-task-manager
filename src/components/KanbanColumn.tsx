import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import TaskCard from "./TaskCard";
import { EnumStatus, Task } from "../types";
import { CreateOrUpdateTask } from "./CreateOrUpdateTask";

interface Props {
  id: string | number;
  title: string;
  tasks: Task[];
}

const KanbanColumn = ({ id, title, tasks }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex-1 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          {id === EnumStatus.PENDING && (
            <button onClick={() => setOpen(true)}>
              <PlusIcon />
            </button>
          )}
        </div>
        <div className="space-y-4">
          {tasks.length ? (
            tasks.map((task) => <TaskCard key={task.id} task={task} />)
          ) : (
            <div>Empty</div>
          )}
        </div>
      </div>
      <CreateOrUpdateTask open={open} setOpen={(state) => setOpen(state)} />
    </>
  );
};

export default KanbanColumn;
