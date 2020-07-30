import React from "react";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StopIcon from "@material-ui/icons/Stop";

import {
  resultPacketsSenderStats,
  resultPacketsReceiverStats,
} from "../../dummydata/resultPacketsData";
import DataDisplayGrid from "../commonComponents/DataDisplayGrid";

import CustomMaterialTable from "../commonComponents/CustomMaterialTable";

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    marginRight: 20,
    fontSize: "medium",
  },
  title: {
    flexGrow: 1,
  },
}));

const ResultPackets = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Toolbar variant="dense" disableGutters={true}>
          <StopIcon className={classes.toolbarIcon} />
          <Typography
            variant="subtitle1"
            className={classes.title}
            color="textPrimary"
          >
            Result Packets Sender Statistics
          </Typography>
        </Toolbar>
      </Grid>
      <Grid item xs={12} md={12}>
        <DataDisplayGrid data={resultPacketsSenderStats} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Toolbar variant="dense" disableGutters={true}>
          <StopIcon className={classes.toolbarIcon} />
          <Typography
            variant="subtitle1"
            className={classes.title}
            color="textPrimary"
          >
            Result Packets Receiver Statistics
          </Typography>
        </Toolbar>
      </Grid>
      <Grid item xs={12} md={12}>
        <DataDisplayGrid data={resultPacketsReceiverStats} />
      </Grid>
      <Grid item xs={12} md={12}>
        <CustomMaterialTable />
      </Grid>
    </Grid>
  );
};

export default ResultPackets;
