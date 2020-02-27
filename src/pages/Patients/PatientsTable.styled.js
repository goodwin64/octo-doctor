import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => createStyles({
  patientActions: {
    position: 'relative',

    'tr & .action-icons': {
      background: `linear-gradient(90deg, ${theme.palette.background.paper}0 0%, ${theme.palette.primary.light} 15%, ${theme.palette.primary.light} 100%)`,
      opacity: 0,
      padding: theme.spacing(1),
      position: 'absolute',
      right: '50%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: theme.spacing(16),
    },

    'tr:hover & .action-icons': {
      opacity: 1,
    },

    'tr & .action-icons .icon': {
      cursor: 'pointer',
    },

    'tr & .action-icons .icon:hover': {
      cursor: 'pointer',
    },
  },
}));
