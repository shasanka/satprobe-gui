import React, { Component } from "react";
import {
  Drawer,
  Divider,
  List,
  Typography,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Routes from "../utils/Routes";
import { Link, withRouter, Switch, Route } from "react-router-dom";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
});

class AppBarDrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDrawerOpen = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        open: !prevState.open,
      };
    });
  };

  handleDrawerClose = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        open: !prevState.open,
      };
    });
  };

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    // const theme = useTheme();
    return (
      <div className={classes.root}>
        {/* <Grid container> */}
        <div>
          <AppBar />
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
                SatProbe 5.4.0
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Normal Mode", "FL Based Mode"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <Link to={prop.path} key={key}>
                  <MenuItem selected={this.activeRoute(prop.path)}>
                    <ListItemIcon>
                      <prop.icon />
                    </ListItemIcon>
                    <ListItemText style={{ color: "white" }}>
                      {prop.sidebarName}
                    </ListItemText>
                  </MenuItem>
                </Link>
              );
            })}
          </MenuList>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {Routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(AppBarDrawerComponent)
);
