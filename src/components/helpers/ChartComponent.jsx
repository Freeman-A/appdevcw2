import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const ChartComponent = ({
  selectedChart,
  selectedFilter,
  filterOptions,
  data,
  sliderValue,
}) => {
  const chartData = {
    labels: [`${filterOptions} ${sliderValue}`],
    datasets: [
      {
        label: `${selectedFilter} ${selectedChart} ${filterOptions} ${sliderValue}`,
        data: [
          data.data.reduce((total, row) => {
            row[selectedFilter] = Number(row[selectedFilter]);
            if (row[selectedFilter] == sliderValue) return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: 'red',
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
