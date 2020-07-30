import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import CarrierStatistics from "../components/CarrierStatistics/CarriersStatistics";

export class CarrierStatisticsPage extends Component {
  render() {
    return (
      <div>
        <CarrierStatistics />
      </div>
    );
  }
}

export default CarrierStatisticsPage;
