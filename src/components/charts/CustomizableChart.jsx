import { useState } from 'react';
import ChartComponent from '../helpers/ChartComponent.jsx';
import ChartSelector from '../helpers/ChartSelector.jsx';
import FilterSelector from '../helpers/FilterSelector.jsx';
import FilterOptions from '../helpers/FilterOptions.jsx';
import { Box, Stack, Slider } from '@mui/material';

export default function CustomizableChart(data) {
  const [selectedChart, setSelectedChart] = useState('bar');
  const [selectedFilter, setSelectedFilter] = useState('age');
  const [selectedFilterOption, setFilterOption] = useState('age');
  const [value, setValue] = useState(30);

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box>
        <Stack direction="row" spacing={2}>
          <ChartSelector
            selectedChart={selectedChart}
            handleChange={handleChartChange}
          />
          <FilterSelector
            selectedFilter={selectedFilter}
            handleChange={handleFilterChange}
          />
          <FilterOptions
            selectedFilterOption={selectedFilterOption}
            handleChange={handleFilterOptionChange}
          />
          {selectedFilterOption === 'age' ? (
            <Slider
              sx={{ width: 100 }}
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            ></Slider>
          ) : null}
        </Stack>
      </Box>

      <ChartComponent
        selectedChart={selectedChart}
        selectedFilter={selectedFilter}
        filterOptions={selectedFilterOption}
        data={data}
        sliderValue={value}
      />
    </>
  );
}
