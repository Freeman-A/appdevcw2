import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import GenderRedCarRatio from '../components/charts/GenderRedCarRatio';
import { Box, Container, Paper } from '@mui/material';

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
      <Paper elevation={12} square>
        <Navbar />

        <Container
          sx={{
            backgroundColor: '#333333',
            borderRadius: 5,
            float: 'left',
            margin: 5,
          }}
          maxWidth={'sm'}
        >
          <GenderRedCarRatio data={data} />
        </Container>
      </Paper>
    </>
  );
}

export default Insights;
