import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function CarTypeRadar(data) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Car Types and their commonality',
      },
    },
  };

  const chartData = {
    labels: ['Minivan', 'Van', 'SUV', 'Sports Car', 'Panel Truck'],
    datasets: [
      {
        label: '# Car Type',
        data: [
          data.data.reduce((total, row) => {
            if (row.CAR_TYPE == 'Minivan') return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.CAR_TYPE == 'Van') return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.CAR_TYPE == 'z_SUV') return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.CAR_TYPE == 'Sports Car') return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.CAR_TYPE == 'Panel Truck') return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',

        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={chartData} options={options} />;
}
