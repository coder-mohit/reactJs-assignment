import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './TimeSeriesGraph.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
const LineChart = ({timeSeries}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Array Values',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    
    const dataArray = timeSeries ;

    const labels = dataArray.map((_, index) => index);
    const data = dataArray;

    setChartData({
      ...chartData,
      labels: labels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: data,
        },
      ],
    });
  }, [timeSeries]);

  return (
    <div className="time-series-graph-container">
      <h3 className="chart-title">Balance of accounts after a number of months</h3>
      <Line data={chartData}  />
     
    </div>
    
  );
};

export default LineChart;
