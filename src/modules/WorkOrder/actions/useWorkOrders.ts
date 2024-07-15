import {useCallback, useState, useEffect} from 'react';
import {IData, WorkOrder} from '../definitions/types/index';
import {DropResult} from 'react-beautiful-dnd';
import {dataArr} from './data';

const APPLIED = 'Work Requests';
const SHORTLISTED = 'Scheduled Work order';
const INTERVIEW = 'Work Orders';

function useWorkOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tasks, setTasks] = useState<WorkOrder[]>(dataArr as any);
  const [searchValue, setSearchValue] = useState<string>('');

  const setBoardData = useCallback((_tasks: WorkOrder[]) => {
    return {
      tasks: _tasks.reduce((obj, item) => Object.assign(obj, {[item.id]: {...item}}), {}),
      columns: {
        'column-1': {
          id: 'column-1',
          title: APPLIED,
          taskIds: _tasks.filter(item => item.status === 'APPLIED').map(item => item.id),
        },
        'column-2': {
          id: 'column-2',
          title: SHORTLISTED,
          taskIds: _tasks.filter(item => item.status === 'SHORTLISTED').map(item => item.id),
        },
        'column-3': {
          id: 'column-3',
          title: INTERVIEW,
          taskIds: _tasks.filter(item => item.status === 'INTERVIEW').map(item => item.id),
        },
      },
      columnOrder: ['column-1', 'column-2', 'column-3'],
    };
  }, []);

  const [data, setData] = useState<IData | undefined>(setBoardData(dataArr as any));

  const onDragEnd = useCallback(
    (res: DropResult) => {
      const {source, destination, draggableId} = res;
      console.log('newTask resres', res);

      if (destination) {
        let newTask: WorkOrder[] = [];

        const targetStatus =
          destination.droppableId === 'column-1'
            ? 'APPLIED'
            : destination.droppableId === 'column-2'
            ? 'SHORTLISTED'
            : 'INTERVIEW';

        setTasks(prevTasks => {
          newTask = [...prevTasks];
          const targetTask = newTask.find(task => task.id === draggableId);
          if (targetTask) {
            targetTask.status = targetStatus;
            return newTask;
          } else {
            return prevTasks;
          }
        });
        setData(setBoardData(newTask));
      }
    },
    [setBoardData],
  );

  return {
    isLoading,
    isFormOpen,
    data,
    setIsFormOpen,
    setData,
    onDragEnd,
    setSearchValue,
  };
}

export default useWorkOrder;
