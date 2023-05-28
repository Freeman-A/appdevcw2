import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GenderRedCarRatio(data) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Male to Females with red cars',
      },
    },
  };

  const chartData = {
    labels: ['Male, Female'],
    datasets: [
      {
        label: 'Male',
        data: [
          data.data.reduce((total, row) => {
            if (row.GENDER === 'M' && row.RED_CAR === 'yes') return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Female',
        data: [
          data.data.reduce((total, row) => {
            if (row.GENDER === 'z_F' && row.RED_CAR === 'yes') return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={chartData}></Bar>
    </>
  );
}
