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
        text: 'Ratio of Men & Women with/out kid drivers ',
      },
    },
  };
  const chartData = {
    labels: ['Male With', 'Female With', 'Female Wihout', 'Male Without'],
    datasets: [
      {
        label: 'Number of Kid drivers',
        data: [
          data.data.reduce((total, row) => {
            if (row.GENDER === 'M' && row.KIDSDRIV > 0) return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.GENDER === 'z_F' && row.KIDSDRIV > 0) return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.GENDER === 'z_F' && row.KIDSDRIV == 0) return total + 1;

            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (row.GENDER === 'M' && row.KIDSDRIV == 0) return total + 1;

            return total;
          }, 0),
        ],
        backgroundColor: ['lightBlue', 'pink', '#e75480', '#0096f2'],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
}
