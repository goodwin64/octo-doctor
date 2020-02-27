import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      ...green,
      light: '#DDFDF0',
    },
    secondary: {
      main: '#0C9EED',
    },
    background: {
      default: '#F4F7F9',
    }
  },
  status: {
    danger: 'orange',
  },
});
