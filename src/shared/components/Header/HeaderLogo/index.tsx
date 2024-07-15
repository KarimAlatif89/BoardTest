import React from 'react';
import clsx from 'clsx';
import {Box} from '@material-ui/core';
import Logo from 'shared/assets/SiWareLogo.svg';
import {useStyles} from './styles';

export default function HeaderLogo() {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" className={clsx(classes.root)}>
      <Box
        display={'flex'}
        alignItems={'center'}
        className={classes.homeButton}
        color="inherit"
        aria-label="open drawer"
      >
        <img
          alt=""
          src={
            'https://lh4.googleusercontent.com/7AfDmiSxfqeCjj5b6o1rsSNPhDuyO0y4PZYr9TO9zxlWp5wc6P0KCCRKeBRpFhmHyrpq-CusJINeftVAtTVT3oH5cRNGaPyRs2Dx1MVxTlw1sVmDkk0jrkLbGpPLEc8_t-c6-ZMo'
          }
          className={classes.logo}
        />
      </Box>
    </Box>
  );
}
