import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './PageWrapper.styled';

export function PageWrapper({ children }) {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.root}>
      {children}
    </Box>
  );
}
