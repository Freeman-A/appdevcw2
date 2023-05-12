import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { RepeatOneSharp } from '@mui/icons-material';

function Manage() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch('http://localhost/src/api', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setData(data.data);
      setStatus('fetched');
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      {data.map((row) => {
        return <h1> {row.HOMEKIDS} </h1>;
      })}
    </div>
  );
}

export default Manage;
