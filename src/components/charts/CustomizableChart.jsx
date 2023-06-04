import { useState } from 'react';
import ChartSelector from '../helpers/Chartselector.jsx';
import ChartComponent from '../helpers/ChartComponent.jsx';
import { Box } from '@mui/material';
const types = [
  'Bar',
  'Line',
  'Pie',
  'Doughnut',
  'PolarArea',
  'Radar',
  'Scatter',
  'Bubble',
  'Chart',
];

export default function CustomizableChart(data) {
  const [selectedChart, setSelectedChart] = useState('bar');

  const handleChange = (event) => {
    setSelectedChart(event.target.value);
  };

  return (
    <>
      <Box>
        <ChartSelector
          selectedChart={selectedChart}
          handleChange={handleChange}
        />
      </Box>
      <ChartComponent selectedChart={selectedChart} />
    </>
  );
}
