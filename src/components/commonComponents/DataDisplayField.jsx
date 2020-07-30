import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = (theme) => ({
  textKey: {
    fontSize: 12,
    color: "#C7C7CC",
  },
  textValue: {
    fontSize: 24,
  },
});

class DataDisplayField extends Component {
  render() {
    const { classes, _key, _value } = this.props;
    console.log(_key);
    return (
      <div>
        <Typography
          className={classes.textValue}
          color="primary"
          align="center"
        >
          {_value}
        </Typography>
        <Typography className={classes.textKey} align="center">
          {_key}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DataDisplayField);
