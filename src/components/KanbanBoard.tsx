import KanbanColumn from "./KanbanColumn";
import { EnumStatus, Task } from "../types";

interface Props {
  tasks: Task[];
}

const KanbanBoard = ({ tasks }: Props) => (
  <div className="flex flex-col md:flex-row gap-4">
    <KanbanColumn
      id={EnumStatus.PENDING}
      title="Pending"
      tasks={tasks.filter((task) => task.status === EnumStatus.PENDING)}
    />
    <KanbanColumn
      id={EnumStatus.ONGOING}
      title="Ongoing"
      tasks={tasks.filter((task) => task.status === EnumStatus.ONGOING)}
    />
    <KanbanColumn
      id={EnumStatus.COMPLETED}
      title="Completed"
      tasks={tasks.filter((task) => task.status === EnumStatus.COMPLETED)}
    />
  </div>
);

export default KanbanBoard;
