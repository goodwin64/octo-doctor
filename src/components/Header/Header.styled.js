import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SIDEBAR_WIDTH } from '../SidePanel/SidePanel';

export const useStyles = makeStyles((theme) => createStyles({
  appBar: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  logoContainer: {
    width: SIDEBAR_WIDTH,
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
  },
  actionButtons: {
    width: 300,
  },
}));
