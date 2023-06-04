import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterSelector = ({ selectedFilter, handleChange }) => {
  const filterOptions = [
    { name: 'kidsdriv', filter: 'KIDSDRIV' },
    { name: 'birth', filter: 'BIRTH' },
    { name: 'age', filter: 'AGE' },
    { name: 'homekids', filter: 'HOMEKIDS' },
    { name: 'yoj', filter: 'YOJ' },
    { name: 'income', filter: 'INCOME' },
    { name: 'parent1', filter: 'PARENT1' },
    { name: 'home_val', filter: 'HOME_VAL' },
    { name: 'mstatus', filter: 'MSTATUS' },
    { name: 'gender', filter: 'GENDER' },
    { name: 'education', filter: 'EDUCATION' },
    { name: 'occupation', filter: 'OCCUPATION' },
    { name: 'travtime', filter: 'TRAVTIME' },
    { name: 'car_use', filter: 'CAR_USE' },
    { name: 'bluebook', filter: 'BLUEBOOK' },
    { name: 'tif', filter: 'TIF' },
    { name: 'car_type', filter: 'CAR_TYPE' },
    { name: 'red_car', filter: 'RED_CAR' },
    { name: 'oldclaim', filter: 'OLDCLAIM' },
    { name: 'clm_freq', filter: 'CLM_FREQ' },
    { name: 'revoked', filter: 'REVOKED' },
    { name: 'mvr_pts', filter: 'MVR_PTS' },
    { name: 'clm_amt', filter: 'CLM_AMT' },
    { name: 'car_age', filter: 'CAR_AGE' },
    { name: 'claim_flag', filter: 'CLAIM_FLAG' },
    { name: 'urbanicity', filter: 'URBANICITY' },
  ];
  return (
    <FormControl>
      <InputLabel id="Filters">Filters</InputLabel>
      <Select
        sx={{ width: 200 }}
        labelId="Filters"
        id="Filters"
        label="Filters"
        value={selectedFilter}
        onChange={handleChange}
      >
        {filterOptions.map((option) => (
          <MenuItem key={option.name} value={option.filter}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelector;
