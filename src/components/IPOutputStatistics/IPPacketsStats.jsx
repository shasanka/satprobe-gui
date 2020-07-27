import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    marginRight: 20,
    fontSize: "medium",
  },
  title: {
    flexGrow: 1,
  },
  contentGrid: {
    marginLeft: theme.spacing(6),
  },
}));

const IPPacketsStats = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Toolbar variant="dense" disableGutters={true}>
            <StopIcon className={classes.toolbarIcon} />
            <Typography variant="subtitle1" className={classes.title}>
              IP Packets Statistics
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={12} md={12} className={classes.contentGrid}>
          <Typography variant="body2">FL IP Packets :</Typography>
        </Grid>
        <Grid item xs={12} md={12} className={classes.contentGrid}>
          <Typography variant="body2">RL IP Packets :</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default IPPacketsStats;
