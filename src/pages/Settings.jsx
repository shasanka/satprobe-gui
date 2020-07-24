import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TabPanel from "../components/Settings/TabPanel";
import SystemConfiguration from "../components/Settings/SystemConfiguration";
import CarriersConfiguration from "../components/Settings/CarriersConfiguration";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});
class Settings extends Component {
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
          <Tab label="System Configuration" />
          <Tab label="Carriers Congiguration" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <SystemConfiguration />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CarriersConfiguration />
        </TabPanel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Settings);
