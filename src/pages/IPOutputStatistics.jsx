import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import IPPacketsStats from "../components/IPOutputStatistics/IPPacketsStats";
import IPPacketsForwardStats from "../components/IPOutputStatistics/IPPacketsForwardStats";
import IPPacketsStorageStats from "../components/IPOutputStatistics/IPPacketsStorageStats";

class IPOutputStatistics extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <IPPacketsStats />
          </Grid>
          <Grid item xs={12} md={12}>
            <IPPacketsForwardStats />
          </Grid>
          <Grid item xs={12} md={12}>
            <IPPacketsStorageStats />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default IPOutputStatistics;
