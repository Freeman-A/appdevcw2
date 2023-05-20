import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Pagination,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Navbar from '../components/Navbar';

function Manage() {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 100;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const response = await fetch('http://localhost:80/src/api/records', {
        headers: {},
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setData(data);
      setIsFetching(false);
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
              {data
                .slice(1)
                .slice(startIndex, endIndex)
                .map((row) => {
                  return (
                    <TableRow align="left" key={row.ID}>
                      {Object.values(row).map((value, index) => {
                        return <TableCell key={index}>{value}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
}

export default Manage;
