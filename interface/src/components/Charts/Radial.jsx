import React from "react";
import { Radar } from "react-chartjs-2";

function Radial(props) {
  const data = {
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
        label: "Yesterday",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "Today",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };

  return (
    <section>
      <h3 className="RadialHead">
        <u>Example Radial Chart</u>
      </h3>
      <Radar data={data} />
    </section>
  );
}

export default Radial;
