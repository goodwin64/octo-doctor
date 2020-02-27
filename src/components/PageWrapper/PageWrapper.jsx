import React from 'react';
import { Box } from '@material-ui/core';

export function PageWrapper({ children }) {
  return (
    <Box p={2}>
      {children}
    </Box>
  );
}
