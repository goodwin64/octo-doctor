import mockPatients from './mockPatients';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TableControls, itemsViews } from '../../components/TableControls/TableControls';
import { PatientsTable } from './PatientsTable';
import Box from '@material-ui/core/Box';

const columnNameToDataKey = {
  Name: 'firstName',
  'Last Name': 'last_name',
  Age: 'age',
  Gender: 'Gender',
  Height: 'height',
  Weight: 'wight',
  Status: 'status',
  'Last Measurement': 'lastMeasurement',
};

const columnNames = Object.keys(columnNameToDataKey);
const columnDataKeys = columnNames.map((name) => columnNameToDataKey[name]);

/* Memoization could help to keep the proper performance */
function getVisiblePatients(allPatients, searchValue) {
  if (!searchValue) {
    return allPatients;
  }
  return allPatients.filter((patient) => Boolean(
    String(patient.Id).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.firstName).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.last_name).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.age).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.gender).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.height).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.wight).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.status).toLowerCase().includes(searchValue.toLowerCase()) ||
    String(patient.lastMeasurement).toLowerCase().includes(searchValue.toLowerCase()),
  ))
}

export function Patients() {
  const [allPatients, setAllPatients] = React.useState(mockPatients);
  const [sortBy, setSortBy] = React.useState('Name');
  const [itemsView, setItemsView] = React.useState(itemsViews[0]);
  const [search, setSearch] = React.useState('');

  const visiblePatients = getVisiblePatients(allPatients, search);

  const handleSortByChange = (sorter, isAscending) => {
    setSortBy(sorter);
  };

  const onRemovePatient = (patientId) => {
    setAllPatients(allPatients.filter(({ Id }) => Id !== patientId));
  };

  return (
    <>
      <Typography variant={'h3'}>Patients ({allPatients.length})</Typography>
      <Box py={4}>
        <TableControls
          sortBy={sortBy}
          sortByItems={columnNames}
          handleSortByChange={handleSortByChange}
          view={itemsView}
          handleViewChange={setItemsView}
          search={search}
          handleSearchChange={setSearch}
        />
      </Box>
      <PatientsTable
        rows={visiblePatients}
        columnNames={columnNames}
        columnDataKeys={columnDataKeys}
        onRemovePatient={onRemovePatient}
      />
    </>
  );
}
