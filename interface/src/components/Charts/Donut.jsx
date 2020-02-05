import React from "react";
import { Doughnut } from "react-chartjs-2";
// import { defaults } from "react-chartjs-2";

function Donut(props) {
  console.log(props.data)

let info = props.data
// console.log(emotionInfo)

  let data = {
    labels: [
      "neutral 😐",
      "happy 😀",
      "sad 🙁",
      "angry 😡",
      "fearful 😬",
      "disgusted 🤢",
      "surprised 😮"
    ],
    datasets: [
      {
        data: info,
        backgroundColor: [
          "green",
          "yellow",
          "rgba(133, 190, 212)",
          "red",
          "black",
          "rgba(48, 68, 36, 0.733)",
          "orange"
        ],
        hoverBackgroundColor: [
          "green",
          "yellow",
          "rgba(133, 190, 212)",
          "red",
          "black",
          "rgba(48, 68, 36, 0.733)",
          "orange"
        ]
      }
    ]
  };

  return (
    <section className="dlCharts">
      <h3 className="DoughnutHead">
        <u>Summary Chart</u>
      </h3>
      <Doughnut
        data={data}
        options={{
          legend: {
            labels: {
              fontColor: "Blue"
            }
          }
        }}
      />
    </section>
  );
}

export default Donut;
