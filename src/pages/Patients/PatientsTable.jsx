import * as React from 'react';
import { StylizedTable } from '../../components/StylizedTable/StylizedTable';
import { Avatar, TableContainer } from '@material-ui/core';
import dayjs from 'dayjs';
import { useStyles } from './PatientsTable.styled';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Box from '@material-ui/core/Box';

export function PatientsTable(props) {
  const { rows, onRemovePatient } = props;
  const classes = useStyles();

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
      {
        Header: '',
        accessor: 'actions',
        Cell: (
          {
            row: {
              original: {
                Id,
              },
            },
          },
        ) => (
          <div className={classes.patientActions}>
            <Grid container alignItems={'center'} justify={'flex-end'} className="action-icons">
              <Box pr={1} className="icon edit">
                <EditIcon color={'primary'} />
              </Box>
              <Box pr={1} className="icon delete" onClick={() => onRemovePatient(Id)}>
                <DeleteIcon color={'primary'} />
              </Box>
              <Box pr={1} className="icon refresh">
                <AutorenewIcon color={'primary'} />
              </Box>
            </Grid>
            <div className="hint"><MoreHorizIcon /></div>
          </div>
        ),
      },
    ],
    [classes.patientActions, onRemovePatient],
  );

  return (
    <TableContainer>
      <StylizedTable columns={columns} data={rows} />
    </TableContainer>
  );
}
