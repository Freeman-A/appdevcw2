import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Manage from './pages/Manage.jsx';
import Charts from './pages/Charts.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/Manage'} />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Charts" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
