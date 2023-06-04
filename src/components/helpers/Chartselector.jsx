import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ChartSelector = ({ selectedChart, handleChange }) => {
  const chartOptions = [
    { value: 'bar', label: 'Bar Chart' },
    { value: 'line', label: 'Line Chart' },
    { value: 'pie', label: 'Pie Chart' },
  ];

  return (
    <>
      <FormControl>
        <InputLabel id="Chart Type">Chart Type</InputLabel>
        <Select
          labelId="Chart Type"
          id="Chart Type"
          label="Chart Type"
          value={selectedChart}
          onChange={handleChange}
        >
          {chartOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default ChartSelector;
