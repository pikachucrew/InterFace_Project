import React from "react";
import { Doughnut } from "react-chartjs-2";
// import { defaults } from "react-chartjs-2";

function Donut(props) {
  const data = {
    labels: ["Negative", "Neutral", "Happy"],
    datasets: [
      {
        data: [25, 30, 12],
        backgroundColor: [
          "rgba(133, 190, 212)",
          "rgba(112, 226, 108, 0.89)",
          "yellow"
        ],
        hoverBackgroundColor: [
          "rgba(133, 190, 212)",
          "rgba(112, 226, 108, 0.89)",
          "yellow"
        ]
      }
    ]
  };

  return (
    <section>
      <h3 className="DoughnutHead">
        <u>Example Doughnut Chart</u>
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
