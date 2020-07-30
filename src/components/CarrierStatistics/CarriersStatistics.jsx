import React from "react";
import CustomMaterialTable from "../commonComponents/CustomMaterialTable";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StopIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    marginRight: 20,
    fontSize: "medium",
  },
  title: {
    flexGrow: 1,
  },
}));

const CarrierStatistics = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Toolbar variant="dense" disableGutters={true}>
            <StopIcon className={classes.toolbarIcon} />
            <Typography
              variant="subtitle1"
              className={classes.title}
              color="textPrimary"
            >
              Carrier Statistics
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={12} md={12} style={{ width: "100%" }}>
          <CustomMaterialTable />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CarrierStatistics;
