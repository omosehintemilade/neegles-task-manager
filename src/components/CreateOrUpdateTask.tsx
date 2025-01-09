import { DialogExtract } from "./dialog";
import { FormError, SelectDropdown } from "./form-elements";
import { EnumPriority, EnumStatus, Task } from "../types";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useTasks } from "../context/task";
import { useState } from "react";

interface Props {
  defaultValues?: Task;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function CreateOrUpdateTask({ defaultValues, open, setOpen }: Props) {
  const { updateTask } = useTasks();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues });

  const [statusOptions] = useState([
    { label: "Pending", value: EnumStatus.PENDING },
    { label: "Ongoing", value: EnumStatus.ONGOING },
    { label: "Completed", value: EnumStatus.COMPLETED }
  ]);

  const [priorityOptions] = useState([
    { label: "High", value: EnumPriority.HIGH },
    { label: "Medium", value: EnumPriority.MEDIUM },
    { label: "Low", value: EnumPriority.LOW }
  ]);

  const onSubmit: SubmitHandler<Task> = (data) => {
    updateTask(data.id, data);
    setOpen(false);
  };

  return (
    <>
      <DialogExtract
        open={open}
        onOpenChange={setOpen}
        title="Edit Task"
        actionButtons={{
          primary: {
            onClick: handleSubmit(onSubmit)
          }
        }}
        body={
          <form className="space-y-4 mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1.5">
              <label className="text-right">Title</label>
              <input
                className="w-full p-2 border rounded outline-none text-gray-600 focus-within:ring-1"
                {...register("title", { required: "title cannot be empty" })}
              />
              <FormError fieldError={errors.title} />
            </div>
            <div className="space-y-1.5">
              <label className="text-right">Description</label>
              <textarea
                className="w-full p-2 border rounded outline-none text-gray-600 resize-none min-h-16 focus-within:ring-1"
                {...register("description", {
                  required: "description cannot be empty"
                })}
              />
              <FormError fieldError={errors.description} />
            </div>
            <div className="space-y-1.5">
              <label className="text-right">Status</label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    label={
                      statusOptions.find(
                        (option) => option.value === field.value
                      )?.label
                    }
                    onChange={field.onChange}
                    options={statusOptions}
                  />
                )}
              />
              <FormError fieldError={errors.status} />
            </div>

            <div className="space-y-1.5">
              <label className="text-right">Priority</label>

              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    label={
                      priorityOptions.find(
                        (option) => option.value === field.value
                      )?.label
                    }
                    onChange={field.onChange}
                    options={priorityOptions}
                  />
                )}
              />
              <FormError fieldError={errors.priority} />
            </div>
          </form>
        }
      />
    </>
  );
}
