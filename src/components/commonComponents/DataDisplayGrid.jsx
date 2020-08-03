import React from "react";
import { Grid } from "@material-ui/core";
import DataDisplayField from "../commonComponents/DataDisplayField";

const DataDisplayGrid = (props) => {
  const { data } = props;
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((data, index) => {
          const key = Object.keys(data);
          const value = Object.values(data);
          return (
            <Grid item xs={2} md={2} key={index}>
              <DataDisplayField _key={key} _value={value} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DataDisplayGrid;
