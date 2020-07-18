import * as React from "react";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from "@material-ui/core/colors";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Navigation from './navigation.jsx';


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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}))
export default function App() {
  const classes = useStyles(theme);
  return (
    <div className = {classes.root}>
      <Navigation />
    <main className={classes.content}>

      <ThemeProvider theme={theme}>
        <Header />
        <Typography variant="h2">About</Typography>
        <Typography variant="body1" paragraph>
          I am recent graduate of Northwestern University. Before transferring to Northwestern, I studied at Illinois Tech where I worked as a teaching assistant.
        </Typography>
        <Typography variant="body1" paragraph>
          I am currently seeking software development positions. If you are searching for new talent, you can find my contact info and resume on the appropriate pages.
        </Typography>
        <Typography variant="body1" paragraph>
          I have started attending my first hackathons in fall 2017 by attending <a href="https://mhacks.org/">MHacks X</a> and <a href="https://boilermake.org/home">Boilermake V</a> back-to-back. In spring 2018, I attended <a href="https://www.hackillinois.org/">HackIllinois.</a> I spent my time there developing my first RESTful API for a chrome extension. You can find specific details about the things I helped make at my <a href="https://devpost.com/ZacharyMcKee">Devpost profile.</a>, as well as the Projects section on this website.
        </Typography>
        <Typography>
          For my choice of programming languages, I have used a mix of Python, C, C#, Java, and LISP in the past. I'm comfortable with pretty much anything, though if I had to select a language I like writing in the most, it would probably be Python. I also have classroom experience with SQL (Oracle SQL and PostgreSQL).
        </Typography>
        <Typography>

        </Typography>
        <Footer />
      </ThemeProvider>
    </main>

  </div>
  )



}