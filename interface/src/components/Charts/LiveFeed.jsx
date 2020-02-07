import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import * as api from "../../api";
import { liveLineManipulator, getTime } from "../../utils/dataUtils";
import { now } from "@tensorflow/tfjs-core/dist/util";
import upArrow from "../../assets/up_arrow.png"

class LiveFeed extends Component {
  getState = username => {
    api.getEmotions(username, getTime()).then(({ data }) => {
      const emotionRefObj = liveLineManipulator(data);

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
              label: "Neutral",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#FF9494",
              borderColor: "#FF9494",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "black",
              pointBackgroundColor: "#FF9494",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#FF9494",
              pointHoverBorderColor: "#FF9494",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.neutral
            },
            {
              label: "Happy",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#C8B1FE",
              borderColor: "#C8B1FE",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#C8B1FE",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#C8B1FE",
              pointHoverBorderColor: "#C8B1FE",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.happy
            },
            {
              label: "Sad",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#CADECB",
              borderColor: "#CADECB",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#CADECB",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#CADECB",
              pointHoverBorderColor: "#CADECB",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.sad
            },
            {
              label: "Angry",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#FFB26B",
              borderColor: "#FFB26B",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#FFB26B",
              pointBackgroundColor: "#FFB26B",
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
              label: "Fearful",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#B5FD9D",
              borderColor: "#B5FD9D",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#B5FD9D",
              pointBackgroundColor: "#B5FD9D",
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
              label: "Disgusted",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#82BDCE",
              borderColor: "#82BDCE",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#82BDCE",
              pointBackgroundColor: "#82BDCE",
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
              label: "Surprised",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#4BD56D",
              borderColor: "#4BD56D",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#4BD56D",
              pointBackgroundColor: "#4BD56D",
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
    this.setState({ startTime: Date.now() });
    setInterval(() => {
      this.getState(username);
    }, 1000);
  }
  
  state = {
    data: {},
    startTime: null
  };

  smoothScroll = position => {
    if (position === 'top') {
      window.scroll(
        {
          top: 0,
          left: 0
        }
      )
    }
  }
  
  render() {
    
    const { data } = this.state;
    return (
      <div className="flex flex-column justify-between align-center daddyDiv">
        <section className="liveChartHolster shadow-2xl rounded-lg lfChart">
          <h3 className="LineHead chartTitle text-3xl font-bold mb-5">
            Live Feed
          </h3>
          <Line data={data} />
        </section>
        <div className="upLink shadow-2xl rounded-lg flex flex-col justify-center items-center" onClick={() => {
          this.smoothScroll("top");
        }}>
          <p className="chartTitle font-bold text-2xl ">
            Return to Top
          </p>
          <img src={upArrow} className="upArrow" />
        </div>
      </div>
    );
  }
}

export default LiveFeed;
