import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import * as api from "../../api";
import { liveLineManipulator, getTime } from "../../utils/dataUtils";
import { now } from "@tensorflow/tfjs-core/dist/util";

class LiveFeed extends Component {
  getState = username => {
    const { startTime, streaming, alertOn, alertOff } = this.props;
    api.getEmotions(username, getTime()).then(({ data }) => {
      console.log(data);
      const emotionRefObj = liveLineManipulator(data);
      const time = Date.now();
      const emotionVals = Object.values(emotionRefObj);
      let count = 0;
      emotionVals.forEach(arr => {
        if (data.length && arr.every(item => item === 0)) {
          count++;
        }
        if (streaming && count === emotionVals.length) {
          console.log("You gone?")
          alertOff();
        } else if (
          streaming &&
          data.length &&
          count !== emotionVals.length &&
          time - startTime >= 90000
        ) {
          console.log("you're there, aintcha?")
          alertOn();
        }
      });

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
    const { username } = this.props;
    setInterval(() => {
      this.getState(username);
    }, 1000);
  }

  state = {
    data: {}
  };

  render() {
    const { data } = this.state;
    return (
      <section>
        <h3 className="LineHead">
          <u>Live Feed</u>
        </h3>
        <Line data={data} />
      </section>
    );
  }
}

export default LiveFeed;
