import React from "react";
import { Polar } from "react-chartjs-2";

function PolarChart(props) {
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 3, 14, 8, 3],
        backgroundColor: [
          "green",
          "yellow",
          "rgba(133, 190, 212)",
          "red",
          "black",
          "rgba(48, 68, 36, 0.733)",
          "orange"
        ],
        label: "Emotions" // for legend
      }
    ],
    labels: [
      "neutral 😐",
      "happy 😀",
      "sad 🙁",
      "angry 😡",
      "fearful 😬",
      "disgusted 🤢",
      "surprised 😮"
    ]
  };

  return (
    <section>
      <h3 className="PolarHead">
        <u>Example Polar Chart</u>
      </h3>
      <Polar data={data} />
    </section>
  );
}

export default PolarChart;
