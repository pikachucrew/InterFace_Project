import * as api from "../api";
import { donutManipulator } from "../utils/dataUtils";

import React, { Component } from "react";
// import BarChart from './Charts/BarChart'
import Donut from "./Charts/Donut";
import LineChart from "./Charts/LineChart";
import DynamicLine from "./Charts/DynamicLine";

export default class DataVisualisation extends Component {
  state = {
    data: [],
    isLoading: true
  };

  render() {
    const { data, isLoading } = this.state;
    const { user } = this.props;
    // console.log(this.state)
    if (isLoading === true) return <p>Loading...</p>;
    return (
      <div className="chartHolster flex flex-column w-screen ">
      <div className="w-screen flex flex-row flex-wrap">
        {/* <BarChart /> */}
        <Donut data={data} className="dlCharts shadow-2xl" />
        <LineChart username={user} className = "dlCharts shadow-2xl" />
        <div className = "linkHolster shadow-2xl">
          <p>Link to Live Emotions</p>
        </div>
        <div className="hintHolster shadow-2xl">Helpful hint!</div>
      </div>
        {/* <DynamicLine /> */}
      </div>
    );
  }

  componentDidMount() {
    const { user } = this.props;
    api.getEmotions(user).then(response => {
      console.log(response.data);
      const formattedData = donutManipulator(response.data);
      this.setState({ data: formattedData, isLoading: false });
    });
  }
}
