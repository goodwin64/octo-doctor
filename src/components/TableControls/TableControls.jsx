import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListIcon from '@material-ui/icons/List';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './TableControls.styled';

export const itemsViews = ['list', 'tiles'];

export function TableControls(
  {
    sortBy,
    sortByItems,
    handleSortByChange,
    view,
    viewItems,
    handleViewChange,
    search,
    handleSearchChange,
  },
) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Select
          value={sortBy}
          onChange={(e) => handleSortByChange(e.target.value)}
        >
          {
            sortByItems.map(item => (
              <MenuItem key={item} value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Grid container justify={'center'}>
          <ListIcon
            color={view === itemsViews[0] ? 'primary' : 'inherit'}
            onClick={() => handleViewChange(itemsViews[0])}
            style={{ cursor: 'pointer' }}
          />
          <Box mr={1} />
          <DragIndicatorIcon
            color={view === itemsViews[1] ? 'primary' : 'inherit'}
            onClick={() => handleViewChange(itemsViews[1])}
            style={{ cursor: 'pointer' }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Grid container justify={'flex-end'}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleSearchChange(e.target.value)}
              value={search}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
