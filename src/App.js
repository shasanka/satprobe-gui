import React, { Component } from "react";
import { Grid, Drawer, Divider, List , Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <CssBaseline />
          <AppBar
            position="fixed"
            // className={clsx(classes.appBar, {
            //   [classes.appBarShift]: open,
            // })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                // onClick={handleDrawerOpen}
                edge="start"
                // className={clsx(classes.menuButton, {
                //   [classes.hide]: open,
                // })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Mini variant drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent">
            <div>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Normal Mode", "FL Based Mode"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["Decoder Statistics", "Carrier Statistics", "Terminal Statistics" , "IP Output Statistics" , "Settings"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Grid>
      </div>
    );
  }
}
