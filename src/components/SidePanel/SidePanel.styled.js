import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SIDEBAR_WIDTH } from './SidePanel';

export const useStyles = makeStyles((theme) => createStyles({
  sidebar: {
    width: theme.spacing(10),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuButton: {
    margin: theme.spacing(0, 2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: SIDEBAR_WIDTH,
  },
  drawerPaper: {
    width: SIDEBAR_WIDTH,
  },
}));
