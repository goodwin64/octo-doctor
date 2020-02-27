import * as React from 'react';
import { StylizedTable } from '../../components/StylizedTable/StylizedTable';
import { Avatar, TableContainer } from '@material-ui/core';
import dayjs from 'dayjs';

export function PatientsTable(props) {
  const { rows } = props;

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        Cell: (
          {
            row: {
              original: {
                firstName, last_name,
              },
            },
          },
        ) => <Avatar>{firstName[0]}{last_name[0]}</Avatar>,
        accessor: 'avatar',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Height',
        accessor: 'height',
      },
      {
        Header: 'Weight',
        accessor: 'wight',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Last Measurement',
        accessor: (value) => +dayjs(value.lastMeasurement),
        Cell: (
          {
            row: {
              original: {
                lastMeasurement,
              },
            },
          },
        ) => dayjs(lastMeasurement).format('MMM DD, YYYY, HH:mm A'),
      },
    ],
    [],
  );

  return (
    <TableContainer>
      <StylizedTable columns={columns} data={rows} />
    </TableContainer>
  );
}
