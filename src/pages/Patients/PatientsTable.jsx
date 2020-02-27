import * as React from 'react';
import { StylizedTable } from '../../components/StylizedTable/StylizedTable';
import { Avatar, TableContainer } from '@material-ui/core';

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
        accessor: 'lastMeasurement',
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