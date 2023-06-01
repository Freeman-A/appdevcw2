import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartKidsdrivers(data) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Men & Women with Kid drivers',
      },
    },
  };
  const chartData = {
    datasets: [
      {
        label: 'Male',
        data: [
          data.data.reduce((total, row) => {
            if (row.GENDER === 'M' && row.KIDSDRIV > 0) return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Female',
        data: [
          data.data.reduce((total, row) => {
            if (row.GENDER === 'z_F' && row.KIDSDRIV > 0) return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: 'pink',
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
}
