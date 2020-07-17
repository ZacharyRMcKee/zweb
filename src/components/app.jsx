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


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100%",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  navItem: {
    height: '100%',
    textAlign: 'center',
  }
}))




export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
          <List>
            {['Home', 'Contact', 'Resume'].map((text, index) => (
              <ListItem button key={text} className={classes.navItem}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
    </Drawer>
    <main className={classes.content}>
      <Typography variant="h1">Test React Page</Typography>
      <hr />
      <Button>
          Test Button 151
      </Button>
      <Button>
          Test Button 151
      </Button>
    </main>

  </div>
  )



}