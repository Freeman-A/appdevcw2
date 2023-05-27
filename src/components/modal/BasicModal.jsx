import { useState } from 'react';
import {
  Box,
  Modal,
  Button,
  Stack,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, selectedRow }) {
  const [isFetching, setIsFetching] = useState(true);
  const [opened, setOpened] = useState(false);
  const [record, setRecord] = useState([]);

  if (!selectedRow) {
    return;
  }

  const deleteRecord = async () => {
    setIsFetching(true);
    const response = await fetch(
      `http://localhost/src/api/records?ID=${selectedRow.ID}`,
      {
        method: 'DELETE',
      }
    );

    setIsFetching(false);
    window.location.reload();
  };

  const getRecordById = async () => {
    const response = await fetch(
      `http://localhost/src/api/records?ID=${selectedRow.ID}`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    setRecord(data);
    return data;
  };

  return (
    <div>
      <Dialog
        open={opened}
        onClose={() => {
          setOpened(false);
          setOpen(false);
        }}
      >
        <DialogTitle>{`Record For User: ${record.ID}`}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Enter Values that you wish to update
          </DialogContentText>
          {Object.keys(record)
            .slice(1)
            .map((key) => {
              return (
                <TextField
                  autoFocus
                  margin="dense"
                  label={`${key}`}
                  value={record[key]}
                  onChange={() => {}}
                  fullWidth
                  variant="standard"
                />
              );
            })}
        </DialogContent>
        <Button variant="contained" sx={{ height: '50%' }}>
          {'Submit'}
        </Button>
      </Dialog>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" justifyContent="center">
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() => {
                deleteRecord();
              }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpened(true);
                getRecordById();
              }}
            >
              Edit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
