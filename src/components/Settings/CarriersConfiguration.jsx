import React, { Component } from "react";
import {
  Typography,
  Grid,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import StopIcon from "@material-ui/icons/Stop";
import FLModeConfiguration from "./FLModeConfiguration";
import RLModeConfiguration from "./RLModeConfiguration";

const styles = (theme) => ({
  toolbarIcon: {
    marginRight: 20,
    fontSize: "medium",
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  contentGrid: {
    marginLeft: theme.spacing(3),
  },
});
class CarriersConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flMode: true,
      rfBand: "ku",
    };
  }
  //feature testsdgvsdgsad
  handleModeChange = () => {
    this.setState(
      (prevState) => ({
        flMode: !prevState.flMode,
      }),
      () => {
        console.log(this.state.flMode);
      }
    );
  };

  handleBandChange = (event) => {
    this.setState(
      {
        rfBand: event.target.value,
      },
      () => {
        console.log(this.state.rfBand);
      }
    );
  };

  render() {
    const { flMode, rfBand } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Toolbar variant="dense" disableGutters={true}>
              <StopIcon className={classes.toolbarIcon} />
              <Typography
                variant="subtitle1"
                className={classes.title}
                color="textPrimary"
              >
                Capture Mode
              </Typography>
            </Toolbar>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={12}
            spacing={2}
            alignItems="center"
            className={classes.contentGrid}
          >
            <Grid item xs={2} md={2}>
              <Typography>
                Normal
                <Switch
                  checked={flMode}
                  onChange={this.handleModeChange}
                  name="mode"
                />
                FL Based
              </Typography>
            </Grid>
            <Grid item xs={2} md={2}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel id="rfBandInputLabel">RF Band</InputLabel>
                <Select
                  labelId="rfBand"
                  id="rfBand"
                  value={rfBand}
                  onChange={this.handleBandChange}
                >
                  <MenuItem value={"c"}>C Band</MenuItem>
                  <MenuItem value={"c_i"}>C Band(Non-Inverted)</MenuItem>
                  <MenuItem value={"ku"}>Ku Band</MenuItem>
                  <MenuItem value={"ka"}>Ka Band</MenuItem>
                  <MenuItem value={"x"}>X Band</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            {flMode ? <FLModeConfiguration /> : <RLModeConfiguration />}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CarriersConfiguration);
