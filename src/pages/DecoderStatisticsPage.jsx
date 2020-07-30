import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TabPanel from "../components/commonComponents/TabPanel";
import Decoders from "../components/DecoderStatistics/Decoders";
import BTPBroadcaster from "../components/DecoderStatistics/BTPBroadcaster";
import ResultPackets from "../components/DecoderStatistics/ResultPackets";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});
class DecoderStatisticsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const classes = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          variant="fullWidth"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="BTP Broadcaster" />
          <Tab label="Decoders" />
          <Tab label="Result Packets" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <BTPBroadcaster />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Decoders />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ResultPackets />
        </TabPanel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DecoderStatisticsPage);
