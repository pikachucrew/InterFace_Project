import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import * as api from "../../api";
import { liveLineManipulator, getTime } from "../../utils/dataUtils";
<<<<<<< HEAD
import { now } from "@tensorflow/tfjs-core/dist/util";

class LiveFeed extends Component {
  getState = username => {
    const { startTime, streaming, alertOn, alertOff } = this.props;
    api.getEmotions(username, getTime()).then(({ data }) => {
      const emotionRefObj = liveLineManipulator(data);
      const time = Date.now();
      const emotionVals = Object.values(emotionRefObj);
      const { startTime } = this.state;
      let count = 0;
      emotionVals.forEach(arr => {
        if (data.length && arr.every(item => item === 0)) {
          count++;
        }
        
        if (count !== emotionVals.length && !startTime) {
          this.setState({ startTime: Date.now() });
        }
      else if (
          streaming &&
          data.length &&
          count !== emotionVals.length &&
          time - startTime >= 60000
        ) {
          console.log("you're there, aintcha?");
          alertOn();
        } else if  (streaming && count === emotionVals.length) {
          console.log("You gone?");
          alertOff();
          this.setState({ startTime: null });
        }
      });

      // if (!data.length || count === emotionVals.length)

=======
import upArrow from "../../assets/up_arrow.png"

class LiveFeed extends Component {
  getState = username => {
    const time = getTime();
    api.getEmotions(username, getTime()).then(({ data }) => {
      const emotionRefObj = liveLineManipulator(data);
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
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
<<<<<<< HEAD
              label: "neutral 😐",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "green",
              borderColor: "green",
=======
              label: "Neutral",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#FF9494",
              borderColor: "#FF9494",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "black",
<<<<<<< HEAD
              pointBackgroundColor: "green",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "green",
              pointHoverBorderColor: "green",
=======
              pointBackgroundColor: "#FF9494",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#FF9494",
              pointHoverBorderColor: "#FF9494",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.neutral
            },
            {
<<<<<<< HEAD
              label: "happy 😀",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "yellow",
              borderColor: "yellow",
=======
              label: "Happy",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#C8B1FE",
              borderColor: "#C8B1FE",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
<<<<<<< HEAD
              pointBackgroundColor: "yellow",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "yellow",
              pointHoverBorderColor: "yellow",
=======
              pointBackgroundColor: "#C8B1FE",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#C8B1FE",
              pointHoverBorderColor: "#C8B1FE",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.happy
            },
            {
<<<<<<< HEAD
              label: "sad 🙁",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(133, 190, 212)",
              borderColor: "rgba(133, 190, 212)",
=======
              label: "Sad",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#CADECB",
              borderColor: "#CADECB",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
<<<<<<< HEAD
              pointBackgroundColor: "rgba(133, 190, 212)",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(133, 190, 212)",
              pointHoverBorderColor: "rgba(133, 190, 212)",
=======
              pointBackgroundColor: "#CADECB",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#CADECB",
              pointHoverBorderColor: "#CADECB",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: emotionRefObj.sad
            },
            {
<<<<<<< HEAD
              label: "angry 😡",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "red",
              borderColor: "red",
=======
              label: "Angry",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#FFB26B",
              borderColor: "#FFB26B",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
<<<<<<< HEAD
              pointBorderColor: "red",
              pointBackgroundColor: "red",
=======
              pointBorderColor: "#FFB26B",
              pointBackgroundColor: "#FFB26B",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
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
<<<<<<< HEAD
              label: "fearful 😬",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "black",
              borderColor: "black",
=======
              label: "Fearful",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#B5FD9D",
              borderColor: "#B5FD9D",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
<<<<<<< HEAD
              pointBorderColor: "red",
              pointBackgroundColor: "red",
=======
              pointBorderColor: "#B5FD9D",
              pointBackgroundColor: "#B5FD9D",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
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
<<<<<<< HEAD
              label: "disgusted 🤢",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(48, 68, 36, 0.733)",
              borderColor: "rgba(48, 68, 36, 0.733)",
=======
              label: "Disgusted",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#82BDCE",
              borderColor: "#82BDCE",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
<<<<<<< HEAD
              pointBorderColor: "rgba(48, 68, 36, 0.733)",
              pointBackgroundColor: "rgba(48, 68, 36, 0.733)",
=======
              pointBorderColor: "#82BDCE",
              pointBackgroundColor: "#82BDCE",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
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
<<<<<<< HEAD
              label: "surprised 😮",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "orange",
              borderColor: "orange",
=======
              label: "Surprised",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#4BD56D",
              borderColor: "#4BD56D",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
<<<<<<< HEAD
              pointBorderColor: "orange",
              pointBackgroundColor: "orange",
=======
              pointBorderColor: "#4BD56D",
              pointBackgroundColor: "#4BD56D",
>>>>>>> 0c987113926731f46a84cdbb414d37b842382eee
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
