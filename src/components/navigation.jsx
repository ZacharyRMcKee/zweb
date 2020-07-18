import * as React from "react";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import theme from './theme.jsx';
import { makeStyles } from '@material-ui/core/styles';


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
      height: '60%',
      textAlign: 'center',
    },
    listItemText:
    {
      fontSize: '1.5em'
    }
 }))



const Navigation = () =>
 {
    const classes = useStyles(theme);
    return (
 <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
          <List>
            {['Home', 'Projects','Contact', 'Resume'].map((text, index) => (
              <ListItem button key={text} className={classes.navItem}>
                <ListItemText align="center" classes={{primary: classes.listItemText}} primary={text} />
              </ListItem>
            ))}
          </List>
    </Drawer>);
 };

export default Navigation;