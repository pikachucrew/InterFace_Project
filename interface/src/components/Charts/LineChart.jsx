import React from "react";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  const data = {
    labels: ["0: 00", "0:05", "0:10", "0:15", "0:20", "0:25", "0:30"],
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
        data: [65, 59, 80, 81, 56, 55, 40]
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
        data: [10, 45, 30, 68, 88, 12, 73]
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
        data: [20, 5, 10, 25, 12, 33, 4]
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
        data: [2, 4, 1, 52, 40, 37, 32]
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
        data: [12, 14, 11, 21, 71, 4, 8]
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
        data: [24, 24, 21, 24, 25, 20, 22]
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
        data: [82, 76, 41, 37, 20, 18, 10]
      }
    ]
  };

  return (
    <section>
      <h3 className="LineHead">
        <u>Example Line Chart</u>
      </h3>
      <Line data={data} />
    </section>
  );
}

export default LineChart;
