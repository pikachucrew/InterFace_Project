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
      <div>
        {/* <BarChart /> */}
        {/* <Donut data={data} /> */}
        <LineChart username={user} />
        <DynamicLine />
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
