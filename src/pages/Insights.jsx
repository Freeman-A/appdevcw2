import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import GenderRedCarRatio from '../components/charts/GenderRedCarRatio';
import PieChartKidsdrivers from '../components/charts/PieChartKidsdrivers';
import { Paper, Grid, Container, Box } from '@mui/material';
import CarTypeRadar from '../components/charts/CarTypeRadar';
import Homevalue from '../components/charts/HomeValue';
import CustomizableChart from '../components/charts/CustomizableChart';

function Insights() {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const response = await fetch('http://localhost/src/api/records');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setData(data);
      setIsFetching(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Paper elevation={4} square>
        <Navbar />
      </Paper>

      <br />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          sx={{
            margin: 10,
            padding: 10,
            borderRadius: 2,
            maxWidth: '90%',
            maxHeight: 1000,
            border: 1,
          }}
        >
          <Grid item xs={4} height={350}>
            <GenderRedCarRatio data={data} />
          </Grid>
          <Grid item xs={4} height={350}>
            <PieChartKidsdrivers data={data} />
          </Grid>
          <Grid item xs={4} height={350}>
            <CarTypeRadar data={data} />
          </Grid>
          <Grid item xs={4}>
            <Homevalue data={data} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          margin: 10,
          maxWidth: 1200,
          padding: 10,
          borderRadius: 2,
          border: 1,
        }}
      >
        {<CustomizableChart />}
      </Box>
    </>
  );
}

export default Insights;
