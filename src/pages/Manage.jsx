import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from '../components/Navbar';

function Manage() {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const response = await fetch('http://localhost/src/api', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setData(data.data);
      setIsFetching(false);
    };

    fetchData();
  }, []);

  if (isFetching === true) {
    return (
      <LoadingButton loading variant="outlined">
        Loading
      </LoadingButton>
    );
  }

  return (
    <div>
      <Navbar />
      <br />

      {/* <div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button startIcon={<ArrowBackIcon />} size="small"></Button>
          </ReactPaginate>
        </ButtonGroup>
      </div> */}

      <br />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.keys(data[0]).map((key, index) => {
                  return (
                    <TableCell align="left" key={index}>
                      {key}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {data.slice(1).map((row) => {
                return (
                  <TableRow align="left" key={row.ID}>
                    {Object.values(row).map((value, index) => {
                      return <TableCell key={index}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Manage;
