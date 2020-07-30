import React from "react";

import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     backgroundColor: theme.palette.background.default,
//   },
// }));

const CustomMaterialTable = (props) => {
  //   const classes = useStyles();
  return (
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
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        ]}
        options={{
          search: false,
          showTitle: false,
          toolbar: false,
          padding: "dense",
        }}
        components={{
          Container: (props) => (
            <div>
              <Paper {...props} elevation={0} />
            </div>
          ),
        }}
        title="Demo Title"
      />
    </div>
  );
};

// className={classes.paper}

export default CustomMaterialTable;
