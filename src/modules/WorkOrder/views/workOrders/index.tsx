import React, {useState, useCallback} from 'react';
import {Box, TextField, Button} from '@material-ui/core';
import {Delete, Add, Close, CallMerge} from '@material-ui/icons';
import clsx from 'clsx';
import Board from './board';
import WorkOrderContext from './context';
import useWorkOrders from '../../actions/useWorkOrders';
import {useStyles} from './styles';
import debounce from 'lodash.debounce';

export default function WorkOrdersLayout() {
  const {isLoading, isFormOpen, data, setIsFormOpen, setData, onDragEnd, setSearchValue} =
    useWorkOrders();

  const classes = useStyles();

  const debounceSearch = useCallback(
    debounce((searchingValue: string) => {
      setSearchValue(searchingValue);
    }, 500),
    [],
  );

  return (
    <div>
      <Box mt={4} mb={2} display={'flex'} justifyContent={'flex-end'}>
        <Button
          className={classes.btn}
          variant="outlined"
          color="primary"
          startIcon={<CallMerge />}
        >
          Add
        </Button>
      </Box>
      <WorkOrderContext.Provider
        value={{
          data,
          isFormOpen,
          isLoading,
          setIsFormOpen,
          setData,
          onDragEnd,
        }}
      >
        <Board />
      </WorkOrderContext.Provider>
    </div>
  );
}
