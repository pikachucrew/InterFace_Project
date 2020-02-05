import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import * as api from "../../api";
import { lineManipulator, getTime } from "../../utils/dataUtils";

class LineChart extends Component {
  // eh???
  getState = username => {
    const time = getTime();
    api.getEmotions(username, time).then(({ data }) => {
      console.log(data, "line data");
      const emotionRefObj = lineManipulator(data);

      this.setState({
        data: {
          labels: [
            "now",
            "-1 sec",
            "-2 sec",
            "-3 sec",
            "-4 sec",
            "-5 sec",
            "-6 sec"
          ],
          datasets: [
            {
              label: "neutral 😐",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "green",
              borderColor: "green",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "black",
              pointBackgroundColor: "green",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "green",
              pointHoverBorderColor: "green",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.neutral
            },
            {
              label: "happy 😀",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "yellow",
              borderColor: "yellow",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "yellow",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "yellow",
              pointHoverBorderColor: "yellow",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.happy
            },
            {
              label: "sad 🙁",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(133, 190, 212)",
              borderColor: "rgba(133, 190, 212)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "rgba(133, 190, 212)",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(133, 190, 212)",
              pointHoverBorderColor: "rgba(133, 190, 212)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.sad
            },
            {
              label: "angry 😡",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "red",
              borderColor: "red",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(133, 190, 212)",
              pointHoverBorderColor: "rgba(133, 190, 212)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.angry
            },
            {
              label: "fearful 😬",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "black",
              borderColor: "black",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "red",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(133, 190, 212)",
              pointHoverBorderColor: "rgba(133, 190, 212)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.fearful
            },
            {
              label: "disgusted 🤢",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(48, 68, 36, 0.733)",
              borderColor: "rgba(48, 68, 36, 0.733)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(48, 68, 36, 0.733)",
              pointBackgroundColor: "rgba(48, 68, 36, 0.733)",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(133, 190, 212)",
              pointHoverBorderColor: "rgba(133, 190, 212)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.disgusted
            },
            {
              label: "surprised 😮",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "orange",
              borderColor: "orange",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "orange",
              pointBackgroundColor: "orange",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(133, 190, 212)",
              pointHoverBorderColor: "rgba(133, 190, 212)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.surprised
            }
          ]
        }
      });
    });
  };

  componentDidMount() {
    console.log("mounted");
    const { username } = this.props;
    setInterval(() => {
      console.log("interval");
      this.getState(username);
    }, 1000);
  }

  state = {
    data: {}
  };

  render() {
    const { data } = this.state;
    return (
      <section className="dlCharts">
        <h3 className="LineHead">
          <u>Example Line Chart</u>
        </h3>
        <Line data={data} />
      </section>
    );
  }
}

export default LineChart;
