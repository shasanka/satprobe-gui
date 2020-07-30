import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";
import TabPanel from "../components/commonComponents/TabPanel";
import TerminalStatistics from "../components/TerminalStatistics/TerminalStatistics";
import MobileTerminalStatistics from "../components/TerminalStatistics/MobileTerminalStatistics";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

export class TerminalStatisticsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Tabs
          value={value}
          indicatorColor="primary"
          variant="fullWidth"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Terminal Statistics" />
          <Tab label="Mobile Terminal Statistics" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TerminalStatistics />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MobileTerminalStatistics />
        </TabPanel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TerminalStatisticsPage);
