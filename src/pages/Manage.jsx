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
  Button,
  Container,
  Tooltip,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Navbar from '../components/navbar/Navbar';
import BasicModal from '../components/modal/BasicModal';

function Manage() {
  const [isFetching, setIsFetching] = useState(true);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const rowsPerPage = 100;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

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
      {<BasicModal open={open} setOpen={setOpen} selectedRow={selectedRow} />}

      <Navbar />
      <br />

      <Container maxWidth={'xl'}>
        <Tooltip title="Middle Mouse and drag to scroll" placement="top">
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {Object.keys(data[0]).map((key, index) => (
                    <TableCell align="left" key={index}>
                      {key}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(startIndex, endIndex).map((row) => (
                  <TableRow align="left" key={row.ID}>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setOpen(true);
                          setSelectedRow(row);
                        }}
                      >
                        Options
                      </Button>
                    </TableCell>
                    {Object.values(row).map((value, index) => (
                      <TableCell key={index}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tooltip>
      </Container>

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
