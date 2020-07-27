import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  InputLabel,
  FormControl,
  Select,
  TextField,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  contentGrid: {
    marginLeft: theme.spacing(3),
  },
}));

const FLModeConfiguration = (params) => {
  const classes = useStyles();
  const [lnbFrequency, setLnbFrequency] = React.useState("");

  const handleChange = (event) => {
    setLnbFrequency(event.target.value);
  };

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      className={classes.contentGrid}
    >
      <Grid item xs={2} md={2}>
        <FormControl variant="outlined" margin="dense" fullWidth>
          <InputLabel id="lnbFrequencyInputLabel">
            LNB Conversion Frequency
          </InputLabel>
          <Select
            labelId="lnbFrequency"
            id="lnbFrequency"
            value={lnbFrequency}
            onChange={handleChange}
          >
            <MenuItem value={"5150"}>5150 MHz</MenuItem>
            <MenuItem value={"9750"}>9750 MHz</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="satelliteConversionFrequency"
          name="satelliteConversionFrequency"
          label="Satellite Conversion Frequency(MHz)"
          type="text"
          placeholder="Satellite Conversion Frequency"
        />
      </Grid>
    </Grid>
  );
};

export default FLModeConfiguration;
