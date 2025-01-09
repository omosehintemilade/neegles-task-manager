import KanbanColumn from "./KanbanColumn";
import { EnumStatus, Task } from "../types";
import { capitalizeFirstLetter } from "../utils";

interface Props {
  tasks: Task[];
}

const KanbanBoard = ({ tasks }: Props) => (
  <div className="flex flex-col md:flex-row gap-4">
    {Object.values(EnumStatus).map((value) => (
      <KanbanColumn
        key={value}
        id={value}
        title={capitalizeFirstLetter(value)}
        tasks={tasks.filter((task) => task.status === value)}
      />
    ))}
  </div>
);

export default KanbanBoard;
