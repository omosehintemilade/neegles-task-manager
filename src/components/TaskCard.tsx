import { useState } from "react";
import { PencilLineIcon, Trash2Icon } from "lucide-react";
import { CreateOrUpdateTask } from "./CreateOrUpdateTask";
import { DeleteTask } from "./DeleteTask";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [editTaskWithId, setEditTaskWithId] = useState<string | undefined>();
  const [deleteTaskWithId, setDeleteTaskWithId] = useState<
    string | undefined
  >();

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-1.5">{task.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{task.description}</p>
        <div className="flex justify-between items-center text-sm mb-1">
          <p>Status</p>
          <button className="rounded-sm text-xs text-green-500 bg-green-100 lowercase px-3.5 py-1 flex justify-center items-center">
            {task.status}
          </button>
        </div>

        <div className="flex justify-between items-center text-sm mb-1">
          <p>Priority</p>
          <button className="rounded-sm text-xs text-green-500 bg-green-100 lowercase px-3.5 py-1 flex justify-center items-center">
            {task.priority}
          </button>
        </div>

        <div className="mt-5 flex justify-end items-center gap-x-3">
          <button onClick={() => setDeleteTaskWithId(task.id)}>
            <Trash2Icon className="size-6 text-red-600" />
          </button>

          <button onClick={() => setEditTaskWithId(task.id)}>
            <PencilLineIcon className="size-6 text-sky-400" />
          </button>
        </div>
      </div>

      <CreateOrUpdateTask
        defaultValues={task}
        open={!!editTaskWithId}
        setOpen={(state) =>
          setEditTaskWithId((prev) => (state ? prev : undefined))
        }
      />

      <DeleteTask
        open={!!deleteTaskWithId}
        taskId={deleteTaskWithId!}
        setOpen={(state) =>
          setDeleteTaskWithId((prev) => (state ? prev : undefined))
        }
      />
    </>
  );
};

export default TaskCard;
