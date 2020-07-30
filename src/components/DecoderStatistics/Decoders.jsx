import React from "react";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StopIcon from "@material-ui/icons/Stop";
import DataDisplayGrid from "../commonComponents/DataDisplayGrid";
import { decoderStats, jobStats } from "../../dummydata/decoderData";
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
const Decoders = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={12}>
          <Toolbar variant="dense" disableGutters={true}>
            <StopIcon className={classes.toolbarIcon} />
            <Typography
              variant="subtitle1"
              className={classes.title}
              color="textPrimary"
            >
              Job Distributor Statistics
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={12} md={12}>
          <DataDisplayGrid data={jobStats} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Toolbar variant="dense" disableGutters={true}>
            <StopIcon className={classes.toolbarIcon} />
            <Typography
              variant="subtitle1"
              className={classes.title}
              color="textPrimary"
            >
              Decoder Statistics
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={12} md={12}>
          <DataDisplayGrid data={decoderStats} />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomMaterialTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Decoders;
