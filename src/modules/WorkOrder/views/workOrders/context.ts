import React from 'react';
import {IData} from '../../definitions/types/index';
import {DropResult} from 'react-beautiful-dnd';

type State = {
  data: IData | undefined;
  isFormOpen: boolean;
  isLoading: boolean;
  setIsFormOpen: (state: boolean) => void;
  setData: (data: IData) => void;
  onDragEnd: (res: DropResult) => void;
};

const WorkOrderContext = React.createContext<State>({
  data: undefined,
  isFormOpen: false,
  isLoading: false,
  setIsFormOpen: (state: boolean) => {},
  setData: (data: IData) => {},
  onDragEnd: (res: DropResult) => {},
});
export default WorkOrderContext;
