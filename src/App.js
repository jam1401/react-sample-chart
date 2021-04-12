import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "@taeuk-gang/chartjs-plugin-streaming";

import "./App.css";

const data = {
  datasets: [
    {
      label: "Respiration",
      fill: false,
      // lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderWidth: 0.5,
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0.5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
};

const options = {
  plugins: {
    streaming: {
      // per-chart option
      frameRate: 30,
      duration: 20000,
      refresh: 400,
      delay: 400,
      onRefresh: function (chart) {
        chart.data.datasets.forEach(function (dataset) {
          dataset.data.push({
            x: Date.now(),

            y: Math.random(),
          });
        });
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "realtime",
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          display: false,
        },

        display: false,
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          display: false,
        },

        display: false,
      },
    ],
  },
};

class App extends Component {
  render() {
    return <Line data={data} options={options} />;
  }
}

export default App;
