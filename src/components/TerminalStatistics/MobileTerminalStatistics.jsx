import React from "react";
import MaterialTable from "material-table";
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

const MobileTerminalStatistics = (params) => {
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
              Total Mobile Terminals :
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={12} md={12} style={{ width: "100%" }}>
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              columns={[
                { title: "Adı", field: "name" },
                { title: "Soyadı", field: "surname" },
                { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
                {
                  title: "Doğum Yeri",
                  field: "birthCity",
                  lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
                },
              ]}
              data={[
                {
                  name: "Mehmet",
                  surname: "Baran",
                  birthYear: 1987,
                  birthCity: 63,
                },
              ]}
              title="Demo Title"
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MobileTerminalStatistics;
