import { useState } from "react";
import { PencilLineIcon, Trash2Icon } from "lucide-react";
import clsx from "clsx";
//
import { CreateOrUpdateTask } from "./CreateOrUpdateTask";
import { DeleteTask } from "./DeleteTask";
import { EnumPriority, EnumStatus, Task } from "../types";
import { capitalizeFirstLetter } from "../utils";

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
      <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-700">
        <h3 className="font-semibold mb-1.5 text-gray-900 dark:text-white">
          {task.title}
        </h3>
        <p className="text-sm mb-3 text-gray-600 dark:text-gray-300">
          {task.description}
        </p>
        <div className="flex justify-between items-center text-sm mb-1">
          <p>Status</p>
          <button
            className={clsx(
              "rounded-sm text-xs px-3.5 py-1 flex justify-center items-center",
              task.status === EnumStatus.PENDING &&
                "text-purple-500 bg-purple-100",
              task.status === EnumStatus.ONGOING &&
                "text-yellow-500 bg-yellow-100",
              task.status === EnumStatus.COMPLETED &&
                "text-green-500 bg-green-100"
            )}
          >
            {capitalizeFirstLetter(task.status)}
          </button>
        </div>

        <div className="flex justify-between items-center text-sm mb-1">
          <p>Priority</p>
          <button
            className={clsx(
              "rounded-sm text-xs px-3.5 py-1 flex justify-center items-center mb-1",
              task.priority === EnumPriority.LOW && "text-gray-500 bg-gray-100",
              task.priority === EnumPriority.MEDIUM &&
                "text-blue-600 bg-blue-100",
              task.priority === EnumPriority.HIGH && "text-red-500 bg-red-100"
            )}
            // className="rounded-sm text-xs text-green-500 bg-green-100 lowercase px-3.5 py-1 flex justify-center items-center"
          >
            {capitalizeFirstLetter(task.priority)}
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
