import React, {useMemo} from 'react';
import XDrag from './drag';
import {Box, LinearProgress, Tooltip, Typography, Chip, Avatar, Button} from '@material-ui/core';
import {
  SettingsInputAntenna,
  Error,
  AcUnitOutlined,
  SignalCellularAlt,
  Star,
} from '@material-ui/icons';
import {WorkOrder} from '../../definitions/types/index';
import {useStyles} from './styles';
import clsx from 'clsx';

interface Props {
  task: WorkOrder;
  index: number;
  onCardClick: (workOrder: WorkOrder) => void;
}

export default function WorkOrderCard({task, index, onCardClick}: Props) {
  const classes = useStyles();

  return (
    <XDrag draggableId={task.id} index={index} key={task.id}>
      <div
        onClick={() => {
          onCardClick(task);
        }}
        className="card"
      >
        <Box mb={2} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'}>
            <Avatar
              alt="Remy Sharp"
              src={task.imgUrl}
              style={{marginRight: '8px', borderRadius: '30%'}}
            />
            <Box>
              <Box display={'flex'}>
                <SignalCellularAlt
                  style={{
                    fill:
                      task.signalPriority === 'HIGH'
                        ? '#82cf6e'
                        : task.signalPriority === 'MEDIUM'
                        ? '#f6ca45'
                        : '#ec675a',
                  }}
                  fontSize="small"
                />
                <Typography variant={'body2'} style={{marginLeft: '8px'}}>
                  {task.name}
                </Typography>
              </Box>
              <Typography
                variant={'body2'}
                style={{marginLeft: '8px', marginTop: '8px', color: '#9aa7bf'}}
              >
                {task.name}
              </Typography>
            </Box>
          </Box>
          <Chip label="New" style={{background: '#e4eafb', color: '#6383ed', fontWeight: 'bold'}} />
        </Box>

        {/*  */}
        <Box mb={2} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'}>
            <Chip
              label={
                <Box display={'flex'} alignItems={'flex-start'}>
                  <Typography variant="caption" style={{color: 'black', fontWeight: '500'}}>
                    {`${task.stars}.0`}
                  </Typography>
                  <Star style={{marginLeft: '4px', fontSize: '16px', color: '#f7cd47'}} />
                </Box>
              }
              variant="default"
              style={{
                color: '#6383ed',
                fontWeight: 'bold',
                minWidth: '28px',
                background: '#f2f4f7',
              }}
            />
            <Box>
              <Typography variant={'body2'} style={{marginLeft: '8px', color: '#9aa7bf'}}>
                {task.phoneNumber}
              </Typography>
            </Box>
          </Box>
          {task.isFollowed && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{borderRadius: '12px', textTransform: 'capitalize', background: '#496eeb'}}
            >
              Followed
            </Button>
          )}
        </Box>
      </div>
    </XDrag>
  );
}
