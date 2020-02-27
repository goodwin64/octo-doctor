import React from 'react';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useStyles } from './HealthController.styled';

export function HealthController() {
  const [quantities, setQuantities] = React.useState({
    alerts: 14,
    norm: 221,
  });
  const totalQuantities = quantities.alerts + quantities.norm;

  const handleQuantityChange = (quantityKey, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [quantityKey]: value,
    }));
  };

  const classes = useStyles();

  const [alertPercentage, normPercentage] = [
    quantities.alerts / totalQuantities * 100,
    quantities.norm / totalQuantities * 100,
  ];

  return (
    <>
      <div>
        <TextField
          value={quantities.alerts}
          onChange={(e) => handleQuantityChange('alerts', e.target.valueAsNumber)}
          label={'alerts'}
          type={'number'}
        />
        <TextField
          value={quantities.norm}
          onChange={(e) => handleQuantityChange('norm', e.target.valueAsNumber)}
          label={'norm'}
          type={'number'}
        />
      </div>

      <Grid container justify={'center'} alignItems={'center'}>
        <Box p={10}>
          <div className={classes.barsContainer}>
            <div className="alert-bar" style={{ height: alertPercentage + '%' }}/>
            <div className="norm-bar" style={{ height: normPercentage + '%' }}/>
          </div>
        </Box>
      </Grid>
    </>
  );
}
