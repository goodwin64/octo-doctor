import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => createStyles({
  table: {
    borderSpacing: 0,
    borderCollapse: 'collapse',

    '& thead': {
      backgroundColor: theme.palette.grey['400'],

      '& th': {
        padding: theme.spacing(2, 5, 2, 2),
        position: 'relative',
        textTransform: 'uppercase',

        '&::selection': {
          backgroundColor: 'transparent',
        },

        '& span': {
          position: 'absolute',
          right: 0,
        },
      },
    },

    '& > tbody': {
      '& > tr': {
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey['100'],

        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          boxShadow: theme.shadows[5],
          borderBottomColor: 'transparent',
        },

        '& > td': {
          padding: theme.spacing(1, 0),

          '&:first-child': {
            paddingLeft: theme.spacing(1),
          },
          '&:last-child': {
            paddingLeft: theme.spacing(1),
          },
        },
      },
    },
  },
}));
