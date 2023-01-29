import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default customTheme;
