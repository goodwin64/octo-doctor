import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Patients } from '../../pages/Patients/Patients';
import { HealthController } from '../HealthController/HealthController';

export function ActiveRoute() {
  return (
    <Switch>
      <Route path={'/health-controller'}>
        <HealthController />
      </Route>
      <Route path={['/', '/patients']}>
        <Patients />
      </Route>
    </Switch>
  );
}
