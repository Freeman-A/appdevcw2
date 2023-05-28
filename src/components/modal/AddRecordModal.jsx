import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  Button,
} from '@mui/material';

const valueNames = [
  'KIDSDRIV',
  'BIRTH',
  'AGE',
  'HOMEKIDS',
  'YOJ',
  'INCOME',
  'PARENT1',
  'HOME_VAL',
  'MSTATUS',
  'GENDER',
  'EDUCATION',
  'OCCUPATION',
  'TRAVTIME',
  'CAR_USE',
  'BLUEBOOK',
  'TIF',
  'CAR_TYPE',
  'RED_CAR',
  'OLDCLAIM',
  'CLM_FREQ',
  'REVOKED',
  'MVR_PTS',
  'CLM_AMT',
  'CAR_AGE',
  'CLAIM_FLAG',
  'URBANICITY',
];

export default function AddRecordModal({ open, setOpen }) {
  const [record, setRecord] = useState({});

  const handleSubmitData = async () => {
    const response = await fetch(`http://localhost/src/api/records?`, {
      method: 'POST',
      body: JSON.stringify(record),
    });

    setOpen(false);
  };

  const handleInputChange = (event, key) => {
    setRecord({
      ...record,
      [key]: event.target.value,
    });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Create a New record</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the values you wish to submit
          </DialogContentText>
          {valueNames.map((key, index) => {
            return (
              <TextField
                label={`${key}`}
                key={index}
                value={record.key}
                onChange={(event) => handleInputChange(event, key)}
                variant="outlined"
                fullWidth
                margin="normal"
              ></TextField>
            );
          })}
        </DialogContent>
        <Button
          variant="contained"
          sx={{ height: '50%' }}
          onClick={() => handleSubmitData()}
        >
          {'Submit'}
        </Button>
      </Dialog>
    </>
  );
}
