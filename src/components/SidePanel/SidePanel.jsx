import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import WarningIcon from '@material-ui/icons/Warning';
import NoteIcon from '@material-ui/icons/Note';
import TimelineIcon from '@material-ui/icons/Timeline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './SidePanel.styled';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Box from '@material-ui/core/Box';

const listItems = ['Overview', 'Patients', 'Alerts', 'Notes', 'Reports'];
const itemToIcon = {
  [listItems[0]]: HomeIcon,
  [listItems[1]]: PersonAddIcon,
  [listItems[2]]: WarningIcon,
  [listItems[3]]: NoteIcon,
  [listItems[4]]: TimelineIcon,
};

export const SIDEBAR_WIDTH = 240;

export function SidePanel() {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Box component={'aside'} className={classes.sidebar}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {listItems.map((text) => {
            const Icon = itemToIcon[text];
            return (
              <ListItem button key={text}>
                <ListItemIcon><Icon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
