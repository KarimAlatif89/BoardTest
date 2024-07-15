export type CreateWorkOrderTabs = 'PLANS' | 'TASKS' | 'ASSETS' | 'USERS';
export type Status = 'IN_PROGRESS' | 'PENDING' | 'WARNING' | 'DONE' | 'TO_DO';
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';
export type DialogState = 'CANCEL' | 'END';

export interface WorkOrder {
  id: string;
  name: string;
  country: string;
  phoneNumber: string;
  signalPriority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEW';
  stars: number;
  isNew: boolean;
  isFollowed: boolean;
}

export interface WorkOrders {
  [key: string]: WorkOrder;
}

export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface IColumns {
  [key: string]: IColumn;
}

export interface IData {
  tasks: WorkOrders;
  columns: IColumns;
  columnOrder: string[];
}

export const QueueStates = {
  inProgress: 'inProgress',
  todo: 'to DO',
  ended: 'ended',
};

export interface BoardSocketResponse {
  action:
    | 'AUTOMATIC_CREATE_WORK_QUEUE'
    | 'AUTOMATIC_CREATE_WORK_QUEUE'
    | 'AUTOMATIC_CREATE_WORK_QUEUE';
}
