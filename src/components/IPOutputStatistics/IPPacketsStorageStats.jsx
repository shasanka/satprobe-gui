import React from "react";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import { makeStyles } from "@material-ui/core/styles";

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

const IPPacketsStorageStats = (props) => {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Toolbar variant="dense" disableGutters={true}>
              <StopIcon className={classes.toolbarIcon} />
              <Typography variant="subtitle1" className={classes.title}>
                IP Packets Storage Statistics
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={12} md={12} className={classes.contentGrid}>
            <Typography variant="body2">Current Pcap File : </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={classes.contentGrid}>
            <Typography variant="body2">IP Packets Stored :</Typography>
          </Grid>
          <Grid item xs={12} md={12} className={classes.contentGrid}>
            <Typography variant="body2">IP Packets Rate :</Typography>
          </Grid>
          <Grid item xs={12} md={12} className={classes.contentGrid}>
            <Typography variant="body2">Current File Timestamp :</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
};

export default IPPacketsStorageStats;
