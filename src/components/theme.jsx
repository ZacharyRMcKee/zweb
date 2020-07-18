import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
  
  
    },
    palette: {
      primary: purple,
    },
    typography: {
      h1: {
        fontSize: '4rem',
      },
      h2: {
        fontSize: '2rem'
      },
      h3:
      {
        fontSize: '1.5rem'
      }
    }
  });


  export {theme};