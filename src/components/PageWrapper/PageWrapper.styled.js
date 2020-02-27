import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => createStyles({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));
