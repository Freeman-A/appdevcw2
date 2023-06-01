import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import GenderRedCarRatio from '../components/charts/GenderRedCarRatio';
import PieChartKidsdrivers from '../components/charts/PieChartKidsdrivers';
import { Paper, Grid, Container } from '@mui/material';

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

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <GenderRedCarRatio data={data} />
        </Grid>
        <Grid item xs={4}>
          <PieChartKidsdrivers data={data} />
        </Grid>
      </Grid>
    </>
  );
}

export default Insights;
