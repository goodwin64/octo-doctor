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

function getSortingComparison(a, b, sorter, isAsc) {
  const diff = a[columnNameToDataKey[sorter]] - b[columnNameToDataKey[sorter]];
  return isAsc ? diff : -1 * diff;
}

export function Patients() {
  const [allPatients, setAllPatients] = React.useState(mockPatients);
  const [sortBy, setSortBy] = React.useState('Name');
  const [itemsView, setItemsView] = React.useState(itemsViews[0]);
  const [search, setSearch] = React.useState('');

  const handleSortByChange = (sorter, isAscending) => {
    setSortBy(sorter);
  };

  const onRemovePatient = (patientId) => {
    console.log('patientId', patientId);
    setAllPatients(allPatients.filter(({ Id }) => Id !== patientId))
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
        rows={allPatients}
        columnNames={columnNames}
        columnDataKeys={columnDataKeys}
        handleSortByChange={handleSortByChange}
        onRemovePatient={onRemovePatient}
      />
    </>
  );
}
