import { useTasks } from "../context/task";
import { DialogExtract } from "./dialog";

interface Props {
  taskId: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  onCompleted?: () => void;
}

export function DeleteTask({ taskId, open, setOpen, onCompleted }: Props) {
  const { removeTask } = useTasks();
  return (
    <>
      <DialogExtract
        open={open}
        onOpenChange={setOpen}
        title="Delete Task"
        body={
          <p>
            Are you sure you want to delete this task? This action is not
            reversible
          </p>
        }
        actionButtons={{
          primary: {
            className: "bg-red-500",
            text: "Delete",
            onClick: () => {
              removeTask(taskId);
              onCompleted?.();
              setOpen(false);
            }
          },
          secondary: {
            className:
              "bg-transparent border shadow-sm text-black dark:text-white dark:bg-gray-700",
            text: "Cancel"
          }
        }}
      />
    </>
  );
}
