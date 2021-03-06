import React, { Component } from "react";
import { Grid, Typography, Toolbar } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import { withStyles } from "@material-ui/core/styles";
import CustomMaterialTable from "../commonComponents/CustomMaterialTable";

const styles = (theme) => ({
  toolbarIcon: {
    marginRight: 20,
    fontSize: "medium",
  },
  title: {
    flexGrow: 1,
  },
});

class RLModeConfiguration extends Component {
  render() {
    const { classes } = this.props;
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
                Carriers Configuration
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle2"> controls</Typography>
          </Grid>
          <Grid item xs={12} md={12} style={{ width: "100%" }}>
            <CustomMaterialTable />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RLModeConfiguration);
