import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => createStyles({
  table: {
    borderSpacing: 0,
    borderCollapse: 'collapse',
    width: '100%',

    '& thead': {
      backgroundColor: theme.palette.grey['400'],

      '& th': {
        padding: theme.spacing(2, 5, 2, 0),
        position: 'relative',
        textTransform: 'uppercase',
        textAlign: 'left',

        '&:last-child': {
          textAlign: 'right',
          padding: theme.spacing(2, 5, 2, 2),
        },

        '&::selection': {
          backgroundColor: 'transparent',
        },

        '& span': {
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        },
      },
    },

    '& > tbody': {
      '& > tr': {
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey['100'],
        backgroundColor: theme.palette.background.paper,

        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          boxShadow: theme.shadows[1],
          borderBottomColor: 'transparent',
        },

        '& > td': {
          padding: theme.spacing(1, 0),

          '&:first-child': {
            paddingLeft: theme.spacing(1),
          },
          '&:last-child': {
            paddingRight: theme.spacing(1),
            textAlign: 'right',
          },
        },
      },
    },
  },
}));
