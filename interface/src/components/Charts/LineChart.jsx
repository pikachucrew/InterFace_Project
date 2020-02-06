import React, { Component } from "react";
import Donut from "./Donut";
import { Line } from "react-chartjs-2";
import * as api from "../../api";
import { lineManipulator } from "../../utils/dataUtils";
import downArrow from "../../assets/down_arrow.png";
import Hint from "./Hints"
class LineChart extends Component {
  getState = username => {
    api.getEmotions(username, "09:00:00").then(({ data }) => {
      const emotionRefObj = lineManipulator(data);
      this.setState({
        data: {
          labels: [
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00"
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
              pointBorderColor: "#B5FD9D",
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
              label: "Sad ",
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

  selectTime = ({ target }) => {
    this.setState({ time: target.name });
  };

  componentDidMount() {
    const { username } = this.props;
    this.getState(username);
  }

  smoothScroll = position => {
    if (position === "liveGraph") {
      window.scroll({
        top: window.innerHeight,
        left: 0
      });
    }
  };

  state = {
    data: {},
    buttonRef: {
      "09:00": "10:00",
      "10:00": "11:00",
      "11:00": "12:00",
      "12:00": "13:00",
      "13:00": "14:00",
      "14:00": "15:00",
      "15:00": "16:00",
      "16:00": "17:00"
    },
    time: undefined
  };

  render() {
    const { data, buttonRef, time } = this.state;
    const { username } = this.props;
    return (
      <div className="chartHolster flex flex-row w-screen flex-wrap">
        <Donut username={username} time={time} refObj={buttonRef} />
        <section className="dlCharts shadow-2xl rounded-lg">
          {/* <h3 className="LineHead chartTitle text-3xl font-bold mb-5">
            Your Day
          </h3> */}
          <Line data={data} />
          <div className="w-full flex flex-wrap justify-around">
            {Object.keys(buttonRef).map(key => {
              return (
                <button
                  className="dashButts chartButts rounded-lg"
                  onClick={this.selectTime}
                  name={key}
                >{`${key} - ${buttonRef[key]}`}</button>
              );
            })}
            <button
              onClick={this.selectTime}
              className="flex-grow dashButts chartButts rounded-lg"
            >
              All Day
            </button>
          </div>
        </section>
        <div className="linkHolster shadow-2xl rounded-lg flex flex-row justify-center" onClick={() => {
          this.smoothScroll("liveGraph");
        }}>
            <p
            className="chartTitle font-bold text-2xl flex flex-column"
          >
            Live Data
          </p>
          <img src={downArrow} className="downArrow" />
        </div>
        <Hint />
      </div>
    );
  }
}

export default LineChart;
