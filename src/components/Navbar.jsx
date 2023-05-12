import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Storage from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Navbar() {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{ position: 'relative' }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Manage"
        value="manage"
        icon={<Storage />}
        href="/Manage"
      />
      <BottomNavigationAction
        label="Insights"
        value="charts"
        icon={<BarChartIcon />}
        href="/Insights"
      />
    </BottomNavigation>
  );
}
