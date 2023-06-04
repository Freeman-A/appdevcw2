import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Homevalue(data) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'House value to Education type',
      },
    },
  };

  const chartData = {
    labels: ['PhD', 'Masters', 'Bachelors', 'High School Diploma'],
    datasets: [
      {
        label: ' Home Values',
        data: [
          data.data.reduce((total, row) => {
            if (!row.HOME_VAL) {
              return total;
            }
            const value = Number(
              row.HOME_VAL.replace('$', '').replace(',', '')
            );

            if (row.EDUCATION === 'PhD') return total + value;

            console.log(total);
            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (!row.HOME_VAL) {
              return total;
            }
            const value = Number(
              row.HOME_VAL.replace('$', '').replace(',', '')
            );

            if (row.EDUCATION === 'Masters') return total + value;

            console.log(total);
            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (!row.HOME_VAL) {
              return total;
            }
            const value = Number(
              row.HOME_VAL.replace('$', '').replace(',', '')
            );

            if (row.EDUCATION === 'Bachelors') return total + value;

            console.log(total);
            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (!row.HOME_VAL) {
              return total;
            }
            const value = Number(
              row.HOME_VAL.replace('$', '').replace(',', '')
            );

            if (row.EDUCATION === 'z_High School') return total + value;

            console.log(total);
            return total;
          }, 0),
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total Income',
        data: [
          data.data.reduce((total, row) => {
            if (!row.INCOME) {
              return total;
            }
            const value = Number(row.INCOME.replace('$', '').replace(',', ''));

            if (row.EDUCATION === 'PhD') return total + value;

            console.log(total);
            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (!row.INCOME) {
              return total;
            }
            const value = Number(row.INCOME.replace('$', '').replace(',', ''));

            if (row.EDUCATION === 'Masters') return total + value;

            console.log(total);
            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (!row.INCOME) {
              return total;
            }
            const value = Number(row.INCOME.replace('$', '').replace(',', ''));

            if (row.EDUCATION === 'Bachelors') return total + value;

            console.log(total);
            return total;
          }, 0),
          data.data.reduce((total, row) => {
            if (!row.INCOME) {
              return total;
            }
            const value = Number(row.INCOME.replace('$', '').replace(',', ''));

            if (row.EDUCATION === 'z_High School') return total + value;

            console.log(total);
            return total;
          }, 0),
        ],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
