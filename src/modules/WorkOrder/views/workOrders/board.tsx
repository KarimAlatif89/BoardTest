import React, {useContext, useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import XDrop from './drop';
import XDrag from './drag';
import XColumn from './column';
import {useStyles} from './styles';
import WorkOrderContext from './context';
import {WorkOrder} from '../../definitions/types/index';

export default function Board() {
  const classes = useStyles();
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder | undefined>(undefined);
  const {data, onDragEnd, isLoading} = useContext(WorkOrderContext);

  return (
    <>
      {isLoading ? (
        <>{'LOADING'}</>
      ) : (
        <DragDropContext onDragEnd={data => onDragEnd(data)}>
          <XDrop
            className={classes.container}
            droppableId="all-columns"
            type="COLUMN"
            direction="horizontal"
            // isDropDisabled={true}
          >
            {data?.columnOrder.map((columnId: string, index: number) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId: string) => data.tasks[taskId]);
              return (
                <XDrag
                  // isDragDisabled={index === 0 || index === 1}
                  key={columnId}
                  draggableId={columnId}
                  index={index}
                  dragAll={true}
                >
                  <XColumn
                    onCardClick={(workdOrder: WorkOrder) => {
                      setSelectedWorkOrder(workdOrder);
                    }}
                    column={column}
                    tasks={tasks}
                    isDragDisabled={false}
                  />
                </XDrag>
              );
            })}
          </XDrop>
        </DragDropContext>
      )}
    </>
  );
}
