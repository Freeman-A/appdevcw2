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
      sx={{ position: 'relative' }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Manage"
        value="manage"
        icon={<Storage />}
      />
      <BottomNavigationAction
        label="Charts"
        value="charts"
        icon={<BarChartIcon />}
      />
    </BottomNavigation>
  );
}
