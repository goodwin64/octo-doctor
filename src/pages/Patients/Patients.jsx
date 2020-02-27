import mockPatients from './mockPatients';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TableControls, itemsViews } from '../../components/TableControls/TableControls';

const sorterToKey = {
  Name: 'last_name',
  Age: 'age',
  Gender: 'Gender',
  Height: 'height',
  Weight: 'wight',
  Status: 'status',
};

const sortByItems = Object.keys(sorterToKey);

function getSortingComparison(a, b, sorter, isAsc) {
  const diff = a[sorterToKey[sorter]] - b[sorterToKey[sorter]];
  return isAsc ? diff : -1 * diff;
}

export function Patients() {
  const [patients, setPatients] = React.useState(mockPatients);
  const [sortBy, setSortBy] = React.useState('Name');
  const [itemsView, setItemsView] = React.useState(itemsViews[0]);
  const [search, setSearch] = React.useState('');

  const handleSortByChange = (sorter, isAscending) => {
    setSortBy(sorter);
    setPatients([...mockPatients].sort((a, b) => getSortingComparison(a, b, sorter, isAscending)));
  };

  return (
    <>
      <Typography>Patients ({patients.length})</Typography>
      <TableControls
        sortBy={sortBy}
        sortByItems={sortByItems}
        handleSortByChange={handleSortByChange}
        view={itemsView}
        handleViewChange={setItemsView}
        search={search}
        handleSearchChange={setSearch}
      />
    </>
  );
}
