import { Doughnut } from "react-chartjs-2";
import React, { Component } from "react";
import * as api from "../../api";
import { donutManipulator } from "../../utils/dataUtils";

class Donut extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    const { username } = this.props;
    api.getEmotions(username).then(({ data }) => {
      console.log(donutManipulator(data), "donut");
      this.setState({
        data: {
          labels: [
            "Neutral",
            "Happy",
            "Sad",
            "Angry",
            "Fearful",
            "Disgusted",
            "Surprised"
          ],
          datasets: [
            {
              data: donutManipulator(data),
              backgroundColor: [
                "#FF9494",
                "#C8B1FE",
                "#CADECB",
                "#FFB26B",
                "#B5FD9D",
                "#82BDCE",
                "#4BD56D"
              ]
            }
          ]
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { time, username, refObj } = this.props;
    if (time !== prevProps.time) {
      api.getEmotions(username, time, refObj[time]).then(({ data }) => {
        this.setState({
          data: {
            labels: [
              "Neutral",
              "Happy",
              "Sad",
              "Angry",
              "Fearful",
              "Disgusted",
              "Surprised"
            ],
            datasets: [
              {
                data: donutManipulator(data),
                backgroundColor: [
                  "#FF9494",
                  "#C8B1FE",
                  "#CADECB",
                  "#FFB26B",
                  "#B5FD9D",
                  "#82BDCE",
                  "#4BD56D"
                ],
                hoverBackgroundColor: [
                  "#FF9494",
                  "#C8B1FE",
                  "#CADECB",
                  "#FFB26B",
                  "#B5FD9D",
                  "#82BDCE",
                  "#4BD56D"
                ]
              }
            ]
          }
        });
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <section className="dlCharts shadow-2xl rounded-lg">
        <h3 className="DoughnutHead chartTitle text-3xl font-bold mb-5">
          Emotional Breakdown
        </h3>
        <Doughnut
          data={data}
          options={{
            legend: {
              labels: {
                fontColor: "dimgray"
              }
            }
          }}
        />
      </section>
    );
  }
}

export default Donut;
