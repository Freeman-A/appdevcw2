import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ChartSelector = ({ selectedChart, handleChange }) => {
  const chartOptions = [
    { value: 'bar', label: 'Bar Chart' },
    { value: 'line', label: 'Line Chart' },
    { value: 'pie', label: 'Pie Chart' },
  ];

  return (
    <FormControl>
      <Select
        label={'Select Type'}
        value={selectedChart}
        onChange={handleChange}
        sx={{ color: 'black' }}
      >
        {chartOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChartSelector;
