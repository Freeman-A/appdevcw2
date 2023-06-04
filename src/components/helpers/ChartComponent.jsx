import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const ChartComponent = ({ selectedChart }) => {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
      },
    ],
  };

  let Chart;
  switch (selectedChart) {
    case 'bar':
      Chart = <Bar data={chartData} />;
      break;
    case 'line':
      Chart = <Line data={chartData} />;
      break;
    case 'pie':
      Chart = <Pie data={chartData} />;
      break;
    default:
      Chart = null;
      break;
  }

  return <div>{Chart}</div>;
};

export default ChartComponent;
