import { createStyles, makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => {
  const commonBarStyles = {
    transition: theme.transitions.create('height'),
    boxShadow: theme.shadows[5],
  };

  return createStyles({
    barsContainer: {
      height: theme.spacing(15),
      width: theme.spacing(6),

      '& .alert-bar': {
        ...commonBarStyles,
        backgroundColor: theme.palette.error.light,
        borderTopLeftRadius: theme.spacing(6),
        borderTopRightRadius: theme.spacing(6),
      },
      '& .norm-bar': {
        ...commonBarStyles,
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
});
