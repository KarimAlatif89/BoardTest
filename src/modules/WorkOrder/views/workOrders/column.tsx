import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {DraggableProvided} from 'react-beautiful-dnd';
import {WorkOrder, IColumn} from '../../definitions/types/index';
import XDrop from './drop';
import clsx from 'clsx';
import WorkOrderCard from './workOrderCard';
import {useStyles} from './styles';

interface IXColumn {
  onCardClick: (workOrder: WorkOrder) => void;
  className?: string;
  column: IColumn;
  tasks: WorkOrder[];
  provided?: DraggableProvided;
  isDragDisabled: boolean;
}

const XColumn: FC<IXColumn> = ({onCardClick, column, tasks, provided, isDragDisabled}) => {
  const classes = useStyles();
  return (
    <div className={classes.column}>
      <Typography
        variant={'subtitle2'}
        className={clsx(classes.title, column.id)}
        {...provided?.dragHandleProps}
      >
        <div className={clsx('dot', column.id)} />
        {column.title}
        <Typography variant={'caption'} className={'total-tasks'}>
          {tasks.length}
        </Typography>
      </Typography>
      <XDrop
        isDropDisabled={isDragDisabled}
        droppableId={column.id}
        type="TASK"
        className="task-drop"
      >
        {tasks.map((task, index) => (
          <WorkOrderCard key={task.id} index={index} task={task} onCardClick={onCardClick} />
        ))}
      </XDrop>
    </div>
  );
};

export default XColumn;
