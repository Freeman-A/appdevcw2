import React from 'react';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterOptions = ({ selectedOption, handleChange }) => {
  const filterOptions = [{ type: 'range', name: 'age' }];
  return (
    <FormControl>
      <InputLabel id="Filters">Filter Options</InputLabel>
      <Select
        sx={{ width: 100 }}
        labelId="Filter"
        id="Filters"
        label="Filter Options"
        value={selectedOption}
        onChange={handleChange}
      >
        {filterOptions.map((option) => (
          <MenuItem key={option.type} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterOptions;
