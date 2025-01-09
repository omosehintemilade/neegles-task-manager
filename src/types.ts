export enum EnumStatus {
  PENDING = "PENDING",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED"
}

export enum EnumPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: EnumStatus;
  priority: EnumPriority;
}
