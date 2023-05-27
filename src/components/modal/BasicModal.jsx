import { useState } from 'react';
import { Box, Modal, Button, Stack } from '@mui/material';

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
  const deleteRecord = async () => {
    setIsFetching(true);
    const response = await fetch(
      `http://localhost/src/api/records?ID=${selectedRow.ID}`,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();

    setIsFetching(false);
    window.location.reload();
  };

  if (!selectedRow) {
    return;
  }

  return (
    <div>
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
            <Button variant="contained">Edit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
