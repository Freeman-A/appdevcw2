import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Manage from './pages/Manage.jsx';
import Charts from './pages/Charts.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Charts" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
