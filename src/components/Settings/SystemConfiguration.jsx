import React, { Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  Switch,
  Button,
  FormControlLabel,
  Toolbar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import StopIcon from "@material-ui/icons/Stop";
import { Formik, Field, Form } from "formik";

const styles = (theme) => ({
  toolbarIcon: {
    marginRight: 20,
    fontSize: "medium",
  },
  title: {
    flexGrow: 1,
  },
  contentGrid: {
    marginLeft: theme.spacing(3),
  },
  textfieldWidth: {
    minWidth: 400,
  },
  gridLeftMargin: {
    marginLeft: theme.spacing(12),
  },
});

const data = {
  networkId: "",
  masterSatprobeIpAddress: "",
  color: "Red",
  localIpAddressTC1: "",
  deviceIpAddressTC1: "",
  forwardingUdpPortTC1: "",
  localIpAddressMrd: "",
  deviceIpAddressMrd: "",
  forwardingUdpPortMrd: "",
  localIpAddressNewtec: "",
  deviceIpAddressNewtec: "",
  forwardingUdpPortNewtec: "",
  localIpAddressTC1ProX: "",
  deviceIpAddressTC1ProX: "",
  forwardingUdpPortTC1ProX: "",
  channelTC1ProX: "",
  rfInputTC1ProX: "",
  pssrCenterFrequency: "",
  pssrSamplingRate: "",
  pssrGain: "",
  pssrClockReference: "",
  controlIpAddressDecoder: "",
  controlPort: "",
  flSourceMacAddress: "",
  flDestinationMacAddress: "",
  rlSourceMacAddress: "",
  rlDestinationMacAddress: "",
  ipForwardingEnabled: true,
  ipForwardingInterface: "",
  forwardingDelay: "",
  ipStorage: true,
  ipStoragePath: "",
  fileSplitValue: "",
  fileSplitType: "",
  seperateFLRLIpPackets: true,
  secondaryPath: "",
  filePrefix: "",
  saveInSubFolders: true,
  filesPerFolder: "",
  freeSpaceThreshold: "",
  emulatorMode: true,
  debugMode: true,
  debugTraceLevel: "",
  nodeStatistics: true,
  saveHexFiles: true,
  disableIpAssembly: true,
};

class SystemConfiguration extends Component {
  handleCancel = () => {
    console.log("CANCEL");
  };

  handleDeviceInformationClick = () => {
    console.log("DEVICE INFORMATION");
  };

  handleAdvanceSettingsClick = () => {
    console.log("ADVANCE SETTINGS");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Formik
          initialValues={data}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values :", values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography
                    variant="subtitle1"
                    className={classes.title}
                    color="textPrimary"
                  >
                    System Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <Field
                    label="Network ID"
                    name="networkId"
                    as={TextField}
                    placeholder="Network ID"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="SatProbe IP Address"
                    name="masterSatprobeIpAddress"
                    as={TextField}
                    placeholder="SatProbe IP Address"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    TC1 Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <FormControl style={{ minWidth: 190 }}>
                    <InputLabel id="localIpAddressTC1">
                      Local IP Address
                    </InputLabel>
                    <Field name="localIpAddressTC1" type="select" as={Select}>
                      <MenuItem value={"192.168.31.100"}>
                        192.168.31.100
                      </MenuItem>
                      <MenuItem value={"192.168.31.110"}>
                        192.168.31.110
                      </MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Field
                    label="Device IP Address"
                    name="deviceIpAddressTC1"
                    as={TextField}
                    placeholder="Device IP Address"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="Forwarding UDP Port"
                    name="forwardingUdpPortTC1"
                    as={TextField}
                    placeholder="Forwarding UDP Port"
                  />{" "}
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    Sencore MRD 2600 Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <FormControl style={{ minWidth: 190 }}>
                    <InputLabel id="localIpAddressMrd">
                      Local IP Address
                    </InputLabel>
                    <Field name="localIpAddressMrd" type="select" as={Select}>
                      <MenuItem value={"192.168.31.100"}>
                        192.168.31.100
                      </MenuItem>
                      <MenuItem value={"192.168.31.110"}>
                        192.168.31.110
                      </MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Field
                    label="Device IP Address"
                    name="deviceIpAddressMrd"
                    as={TextField}
                    placeholder="Device IP Address"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="Forwarding UDP Port"
                    name="forwardingUdpPortMrd"
                    as={TextField}
                    placeholder="Forwarding UDP Port"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    Newtec MDM 9000 Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <FormControl style={{ minWidth: 190 }}>
                    <InputLabel id="localIpAddressNewtec">
                      Local IP Address
                    </InputLabel>
                    <Field name="localIpAddressTC1" type="select" as={Select}>
                      <MenuItem value={"192.168.31.100"}>
                        192.168.31.100
                      </MenuItem>
                      <MenuItem value={"192.168.31.110"}>
                        192.168.31.110
                      </MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Field
                    label="Device IP Address"
                    name="deviceIpAddressNewtec"
                    as={TextField}
                    placeholder="Device IP Address"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="Forwarding UDP Port"
                    name="forwardingUdpPortNewtec"
                    as={TextField}
                    placeholder="Forwarding UDP Port"
                  />{" "}
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    TC1 Pro X Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <FormControl style={{ minWidth: 190 }}>
                    <InputLabel id="localIpAddressTC1ProX">
                      Local IP Address
                    </InputLabel>
                    <Field
                      name="localIpAddressTC1ProX"
                      type="select"
                      as={Select}
                    >
                      <MenuItem value={"192.168.31.100"}>
                        192.168.31.100
                      </MenuItem>
                      <MenuItem value={"192.168.31.110"}>
                        192.168.31.110
                      </MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Field
                    label="Device IP Address"
                    name="deviceIpAddressTC1ProX"
                    as={TextField}
                    placeholder="Device IP Address"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="Forwarding UDP Port"
                    name="forwardingUdpPortTC1ProX"
                    as={TextField}
                    placeholder="Forwarding UDP Port"
                  />{" "}
                </Grid>
                <Grid item>
                  <Field
                    label="Channel"
                    name="channelTC1ProX"
                    as={TextField}
                    placeholder="Channel"
                  />{" "}
                </Grid>
                <Grid item>
                  <Field
                    label="RF Input"
                    name="rfInputTC1ProX"
                    as={TextField}
                    placeholder="RF Input"
                  />{" "}
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    PSSR Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <Field
                    label="PSSR Center Frequency"
                    name="pssrCenterFrequency"
                    as={TextField}
                    placeholder="PSSR Center Frequency"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="PSSR Sampling Rate"
                    name="pssrSamplingRate"
                    as={TextField}
                    placeholder="PSSR Sampling Rate"
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="PSSR Gain"
                    name="pssrGain"
                    as={TextField}
                    placeholder="PSSR Gain"
                  />
                </Grid>
                <Grid item>
                  <FormControl style={{ minWidth: 190 }}>
                    <InputLabel id="pssrClockReference">
                      External Clock Reference
                    </InputLabel>
                    <Field name="pssrClockReference" type="select" as={Select}>
                      <MenuItem value={"Internal"}>Internal</MenuItem>
                      <MenuItem value={"External"}>External</MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    Decoder Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item>
                  <FormControl style={{ minWidth: 190 }}>
                    <InputLabel id="controlIpAddressDecoder">
                      Local IP Address
                    </InputLabel>
                    <Field
                      name="controlIpAddressDecoder"
                      type="select"
                      as={Select}
                    >
                      <MenuItem value={"192.168.31.100"}>
                        192.168.31.100
                      </MenuItem>
                      <MenuItem value={"192.168.31.110"}>
                        192.168.31.110
                      </MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Field
                    label="Control Port"
                    name="controlPort"
                    as={TextField}
                    placeholder="Control Port"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    IP Output Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item container xs={12} md={12} spacing={2}>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      // className={classes.textfieldWidth}
                      label="FL Source MAC Address"
                      name="flSourceMacAddress"
                      as={TextField}
                      placeholder="FL Source MAC Address"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      // className={classes.textfieldWidth}
                      label="FL Destination MAC Address"
                      name="flDestinationMacAddress"
                      as={TextField}
                      placeholder="FL Destination MAC Address"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      // className={classes.textfieldWidth}
                      fullWidth
                      label="RL Source MAC Address"
                      name="rlSourceMacAddress"
                      as={TextField}
                      placeholder="RL Source MAC Address"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      // className={classes.textfieldWidth}
                      fullWidth
                      label="RL Destination MAC Address"
                      name="rlDestinationMacAddress"
                      as={TextField}
                      placeholder="RL Destination MAC Address"
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  md={12}
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={2} md={2}>
                    <FormControlLabel
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="ipForwardingEnabled"
                        />
                      }
                      label="IP Forwarding"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <FormControl fullWidth>
                      <InputLabel id="ipForwardingInterface">
                        IP Forwarding Interface
                      </InputLabel>
                      <Field
                        name="ipForwardingInterface"
                        type="select"
                        as={Select}
                      >
                        <MenuItem value={"192.168.31.100"}>
                          192.168.31.100
                        </MenuItem>
                        <MenuItem value={"192.168.31.110"}>
                          192.168.31.110
                        </MenuItem>
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="Forwarding Delay"
                      name="forwardingDelay"
                      as={TextField}
                      placeholder="Forwarding Delay"
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  md={12}
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={2} md={2}>
                    <FormControlLabel
                      control={
                        <Field as={Switch} type="checkbox" name="ipStorage" />
                      }
                      label="IP Storage"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="IP Storage Path"
                      name="ipStoragePath"
                      as={TextField}
                      placeholder="IP Storage Path"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="File Split Value"
                      name="fileSplitValue"
                      as={TextField}
                      placeholder="File Split Value"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <FormControl fullWidth>
                      <InputLabel id="fileSplitType">
                        File Split Type
                      </InputLabel>
                      <Field name="fileSplitType" type="select" as={Select}>
                        <MenuItem value={"minute"}>Minute(s)</MenuItem>
                        <MenuItem value={"hour"}>Hour(s)</MenuItem>
                        <MenuItem value={"day"}>Day(s)</MenuItem>
                      </Field>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  md={12}
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={2} md={2}>
                    <FormControlLabel
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="seperateFLRLIpPackets"
                        />
                      }
                      label="Save FL and RL IP Packets Separately"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="Secondary Path"
                      name="secondaryPath"
                      as={TextField}
                      placeholder="Secondary Path"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="File Prefix"
                      name="filePrefix"
                      as={TextField}
                      placeholder="File Prefix"
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  md={12}
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={2} md={2}>
                    <FormControlLabel
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="saveInSubFolders"
                        />
                      }
                      label="Save in Subfolders"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="Files per Folder"
                      name="filesPerFolder"
                      as={TextField}
                      placeholder="Files per Folder"
                    />
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Field
                      fullWidth
                      label="Free Space Threshold(%)"
                      name="freeSpaceThreshold"
                      as={TextField}
                      placeholder="Free Space Threshold"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} md={12}>
                <Toolbar variant="dense" disableGutters={true}>
                  <StopIcon className={classes.toolbarIcon} />
                  <Typography variant="subtitle1" className={classes.title}>
                    Debug Configuration
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                spacing={2}
                className={classes.contentGrid}
              >
                <Grid item container xs={12} md={12}>
                  <Grid item>
                    <FormControlLabel
                      style={{ minWidth: 190 }}
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="emulatorMode"
                        />
                      }
                      label="Emulator Mode"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      style={{ minWidth: 190 }}
                      control={
                        <Field as={Switch} type="checkbox" name="debugMode" />
                      }
                      label="Debug Mode"
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      label="Debug Trace Level"
                      name="debugTraceLevel"
                      as={TextField}
                      placeholder="Debug Trace Level"
                    />
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={12}>
                  <Grid item>
                    <FormControlLabel
                      style={{ minWidth: 190 }}
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="nodeStatistics"
                        />
                      }
                      label="Node Statistics"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      style={{ minWidth: 190 }}
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="saveHexFiles"
                        />
                      }
                      label="Save Hex Files"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      style={{ minWidth: 190 }}
                      control={
                        <Field
                          as={Switch}
                          type="checkbox"
                          name="disableIpAssembly"
                        />
                      }
                      label="Disable IP Assembly"
                    />
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={12}>
                  <Grid item container xs={6} md={6} spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleAdvanceSettingsClick}
                      >
                        Advance Settings
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleDeviceInformationClick}
                      >
                        Device Information
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item container xs={6} md={6} spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleCancel}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" type="submit">
                        Set System Configuration
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default withStyles(styles)(SystemConfiguration);
